import { useEffect, useState } from 'react';
import '../../styles/recipe-book.css';
import type { ParsedRecipe } from '../../lib/cooklang';

export default function RecipeView({ recipe }: { recipe: ParsedRecipe }) {
  const [factor, setFactor] = useState<number>(1);
  const [system, setSystem] = useState<'metric' | 'imperial'>('metric');
  const [cookMode, setCookMode] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [activeTimers, setActiveTimers] = useState<Set<number>>(new Set());
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('unit-system', system);
    }
  }, [system]);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('unit-system') as 'metric' | 'imperial' | null;
      if (saved === 'metric' || saved === 'imperial') setSystem(saved);

      // Load shopping list
      const savedList = localStorage.getItem('shopping-list');
      if (savedList) {
        try {
          setShoppingList(JSON.parse(savedList));
        } catch (e) {
          setShoppingList([]);
        }
      }
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA'].includes(target.tagName)) return;
      if (e.key === 'j' || e.key === 'ArrowDown') moveStep(1);
      if (e.key === 'k' || e.key === 'ArrowUp') moveStep(-1);
      if (e.key === 'Enter') startFirstTimerInView();
      if (e.key.toLowerCase() === 's') setFactor((f) => f + 0.5);
    };
    window.addEventListener('keydown', onKey as any);
    return () => window.removeEventListener('keydown', onKey as any);
  }, []);

  useEffect(() => {
    const btn = document.getElementById('cook-mode');
    let wakeLock: any;
    async function toggle() {
      const newMode = !cookMode;
      setCookMode(newMode);
      document.body.classList.toggle('cook-mode', newMode);

      // Stop all timers when exiting cook mode
      if (!newMode) {
        setActiveTimers(new Set());
      }

      try {
        if (newMode) {
          wakeLock = await (navigator as any).wakeLock?.request('screen');
        } else {
          await wakeLock?.release?.();
          wakeLock = null;
        }
      } catch { }
    }
    btn?.addEventListener('click', toggle);
    return () => btn?.removeEventListener('click', toggle);
  }, [cookMode]);

  // Stop timers when moving to next step
  useEffect(() => {
    setActiveTimers(new Set());
  }, [currentStep]);

  // Save shopping list to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('shopping-list', JSON.stringify(shoppingList));
    }
  }, [shoppingList]);

  const addToShoppingList = (ingredient: ParsedIngredient) => {
    const quantity = formatQuantity(ingredient.quantity, ingredient.unit, factor, system);
    const item = `${quantity} ${ingredient.name}`.trim();
    setShoppingList(prev => [...prev, item]);
  };

  const removeFromShoppingList = (index: number) => {
    setShoppingList(prev => prev.filter((_, i) => i !== index));
  };

  const clearShoppingList = () => {
    setShoppingList([]);
  };

  return (
    <article className={`recipe ${cookMode ? 'cook-mode' : ''}`}>
      <header>
        <div className="recipe-header">
          {recipe.image && (
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>
          )}
          <h1 id="title">{recipe.title}</h1>
          {recipe.tags.length ? <p className="recipe-tags">{recipe.tags.join(' • ')}</p> : null}
          {recipe.description ? <p className="recipe-description">{recipe.description}</p> : null}
        </div>
        <div className="controls">
          <div className="scaler">
            <button onClick={() => setFactor(Math.max(0.5, factor - 0.5))}>−</button>
            <span>{(recipe.servings ?? 1) * factor} servings</span>
            <button onClick={() => setFactor(factor + 0.5)}>+</button>
          </div>
          <div className="units" role="radiogroup" aria-label="Units">
            <label htmlFor="units-metric">
              <input
                id="units-metric"
                type="radio"
                name="units"
                value="metric"
                checked={system === 'metric'}
                onChange={(e) => setSystem(e.currentTarget.value as 'metric')}
              />
              Metric
            </label>
            <label htmlFor="units-imperial">
              <input
                id="units-imperial"
                type="radio"
                name="units"
                value="imperial"
                checked={system === 'imperial'}
                onChange={(e) => setSystem(e.currentTarget.value as 'imperial')}
              />
              Imperial
            </label>
          </div>
          <div className="actions">
            <button className="cook-mode-btn" id="cook-mode">{cookMode ? 'Exit Cook Mode' : 'Cook Mode'}</button>
          </div>
        </div>
      </header>

      {!cookMode && (
        <section className="ingredients-section">
          <h2 id="ingredients">Ingredients</h2>
          <div className="ingredients-grid">
            {recipe.ingredients.map((i, idx) => (
              <div key={idx} className="ingredient-item" data-name={i.name} data-qty={i.quantity ?? ''} data-unit={i.unit ?? ''}>
                <span className="ingredient-quantity">{formatQuantity(i.quantity, i.unit, factor, system)}</span>
                <span className="ingredient-name">{i.name}</span>
                <button
                  className="add-to-list-btn"
                  onClick={() => addToShoppingList(i)}
                  title="Add to shopping list"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {recipe.utensils.length && !cookMode ? (
        <section className="utensils-section">
          <h2 id="utensils">Utensils</h2>
          <div className="utensils-list">
            {recipe.utensils.map((u, idx) => (
              <span key={idx} className="utensil-tag">{u}</span>
            ))}
          </div>
        </section>
      ) : null}

      {!cookMode && shoppingList.length > 0 && (
        <section className="shopping-list">
          <h2 id="shopping-list">Shopping List</h2>
          <div className="shopping-list-controls">
            <button onClick={clearShoppingList} className="clear-list-btn">Clear List</button>
          </div>
          <ul>
            {shoppingList.map((item, idx) => (
              <li key={idx}>
                <span>{item}</span>
                <button
                  onClick={() => removeFromShoppingList(idx)}
                  className="remove-item-btn"
                  title="Remove from shopping list"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="method-section">
        <h2 id="method">Method</h2>
        <div className="steps-container">
          {recipe.steps.map((s, idx) => (
            <div
              id={`step-${idx + 1}`}
              key={idx}
              className={`step ${cookMode ? (idx === currentStep ? 'active' : 'inactive') : ''}`}
            >
              <div className="step-number">{idx + 1}</div>
              <div className="step-content">
                <p className="step-text">{s.text}</p>
                {s.timers?.length ? <StepTimers timers={s.timers} stepIndex={idx} activeTimers={activeTimers} setActiveTimers={setActiveTimers} /> : null}
              </div>
            </div>
          ))}
        </div>

        {cookMode && (
          <div className="cook-navigation">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="nav-btn prev-btn"
            >
              ← Previous
            </button>
            <span className="step-counter">
              Step {currentStep + 1} of {recipe.steps.length}
            </span>
            <button
              onClick={() => setCurrentStep(Math.min(recipe.steps.length - 1, currentStep + 1))}
              disabled={currentStep === recipe.steps.length - 1}
              className="nav-btn next-btn"
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </article>
  );
}


function formatQuantity(
  quantity: number | undefined,
  unit: string | null | undefined,
  factor: number,
  system: 'metric' | 'imperial'
): string {
  if (!quantity) return '';
  let value = quantity * factor;
  let u = normaliseUnit(unit);
  if (system === 'imperial') {
    if (u === 'g') { value = value / 28.349523125; u = 'oz'; }
    else if (u === 'kg') { value = value * 2.2046226218; u = 'lb'; }
    else if (u === 'ml') { value = value / 29.5735295625; u = 'fl oz'; }
    else if (u === 'l') { value = value * 4.2267528377; u = 'cup'; }
  } else {
    if (u === 'oz') { value = value * 28.349523125; u = 'g'; }
    else if (u === 'lb') { value = value / 2.2046226218; u = 'kg'; }
    else if (u === 'fl oz') { value = value * 29.5735295625; u = 'ml'; }
    else if (u === 'cup') { value = value / 4.2267528377; u = 'l'; }
  }
  return `${roundPretty(value)} ${u}`.trim();
}

function roundPretty(n: number): string {
  if (n >= 10) return n.toFixed(1);
  if (n >= 1) return n.toFixed(2);
  return n.toFixed(3);
}

function normaliseUnit(unit?: string | null): string {
  const u = (unit || '').trim().toLowerCase();
  if (!u) return '';
  const map: Record<string, string> = {
    g: 'g', gram: 'g', grams: 'g',
    kg: 'kg', kilogram: 'kg', kilograms: 'kg',
    ml: 'ml', millilitre: 'ml', milliliter: 'ml', millilitres: 'ml', milliliters: 'ml',
    l: 'l', litre: 'l', liter: 'l', litres: 'l', liters: 'l',
    oz: 'oz', ounce: 'oz', ounces: 'oz',
    lb: 'lb', lbs: 'lb', pound: 'lb', pounds: 'lb',
    'fl-oz': 'fl oz', 'fl oz': 'fl oz', floz: 'fl oz',
    cup: 'cup', cups: 'cup', c: 'cup',
    tsp: 'tsp', teaspoon: 'tsp', teaspoons: 'tsp',
    tbsp: 'tbsp', tablespoon: 'tbsp', tablespoons: 'tbsp'
  };
  return map[u] || u;
}

function StepTimers({
  timers,
  stepIndex,
  activeTimers,
  setActiveTimers
}: {
  timers: Array<{ label?: string | null; seconds: number }>;
  stepIndex: number;
  activeTimers: Set<number>;
  setActiveTimers: React.Dispatch<React.SetStateAction<Set<number>>>;
}) {
  const [remaining, setRemaining] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const timerId = stepIndex * 1000; // Unique ID for this step's timer

  useEffect(() => {
    let id: any;
    if (running && activeTimers.has(timerId)) {
      const end = Date.now() + remaining * 1000;
      id = setInterval(() => {
        const s = Math.max(0, Math.round((end - Date.now()) / 1000));
        setRemaining(s);
        if (s === 0) {
          clearInterval(id);
          setRunning(false);
          setActiveTimers((prev: Set<number>) => {
            const newSet = new Set(prev);
            newSet.delete(timerId);
            return newSet;
          });
          try { new Audio('/alarm.mp3').play(); } catch { }
        }
      }, 250);
    }
    return () => clearInterval(id);
  }, [running, activeTimers, timerId, remaining, setActiveTimers]);

  // Stop timer when step becomes inactive
  useEffect(() => {
    if (!activeTimers.has(timerId)) {
      setRunning(false);
    }
  }, [activeTimers, timerId]);

  const startTimer = (seconds: number) => {
    setRemaining(seconds);
    setRunning(true);
    setActiveTimers((prev: Set<number>) => new Set([...prev, timerId]));
  };

  const stopTimer = () => {
    setRunning(false);
    setActiveTimers((prev: Set<number>) => {
      const newSet = new Set(prev);
      newSet.delete(timerId);
      return newSet;
    });
  };

  return (
    <div className="timers">
      {timers.map((t, i) => (
        <button key={i} onClick={() => startTimer(t.seconds)}>
          Start {t.label ? `${t.label} ` : ''}({Math.round(t.seconds / 60)}m)
        </button>
      ))}
      {running && (
        <div className="timer-display">
          <span>
            ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, '0')}
          </span>
          <button onClick={stopTimer} className="stop-timer">Stop</button>
        </div>
      )}
    </div>
  );
}

function moveStep(delta: number) {
  const anchors = Array.from(document.querySelectorAll('ol > li[id^="step-"]')) as HTMLElement[];
  const currentIdx = anchors.findIndex((el) => el.getBoundingClientRect().top >= 0);
  const targetIdx = Math.min(anchors.length - 1, Math.max(0, (currentIdx === -1 ? 0 : currentIdx) + delta));
  anchors[targetIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function startFirstTimerInView() {
  const timers = Array.from(document.querySelectorAll('.timers button')) as HTMLButtonElement[];
  timers[0]?.click();
}



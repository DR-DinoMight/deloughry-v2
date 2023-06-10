export function getFormattedDate(
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = {},
  locale: Intl.LocalesArgument = "en-GB"
) {
  const formatOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  };
  return new Date(date).toLocaleDateString(locale, formatOptions);
}


export function makeDateFromPlaylistName(playlistName: string, monthlyPlaylist: boolean) {
  if (monthlyPlaylist) {
    const [monthName, year] = playlistName.split(" '");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return new Date(parseInt("20" + year, 10), months.indexOf(monthName ?? "January"), 1);
  } else {
    // Split the string into an array where " - " occurs
    const parts = playlistName.split(" - ");

    // The year is now the first four characters of the second string in the array
    const year = parts[1]?.substring(0, 4) ?? "2099";

    // make a date from the year and the last month and day of the year
    return new Date(parseInt(year, 10), 12, 31);
  }
}

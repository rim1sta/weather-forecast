import moment from "moment";

enum DateFormat {
  DD_MM_YY = "DD.MM.YY",
}

export const formatDate = (
  isoString: string,
  format: DateFormat = DateFormat.DD_MM_YY
) => {
  const date = moment(isoString, moment.ISO_8601, true);
  if (date.isValid()) {
    return date.format(format);
  }

  return "";
};

const countryFormat = process.env.NUMBER_FORMAT_BY_COUNTRY || "es-AR";

type Style = "decimal" | "currency" | "percent" | "unit";

export class NumericHelper {
  static formatNumber(
    value: number = 0,
    decimals: number = 0,
    style: Style = "decimal"
  ) {
    const formattedValue = new Intl.NumberFormat(countryFormat, {
      style: style,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
    return formattedValue;
  }
}

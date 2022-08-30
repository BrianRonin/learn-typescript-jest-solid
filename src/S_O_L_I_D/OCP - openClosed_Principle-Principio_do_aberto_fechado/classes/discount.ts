export abstract class Discount {
  protected discount = 0
  calculate(price: number): number {
    return price - price * this.discount
  }
}

export class NoDiscont extends Discount {}

export class FifityPercentDiscount extends Discount {
  protected readonly discount = 0.5
}
export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1
}

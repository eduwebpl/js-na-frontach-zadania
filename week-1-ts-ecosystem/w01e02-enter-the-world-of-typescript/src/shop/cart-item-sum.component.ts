import { div } from "../framework/dom-creators.js";

type CartItemSumParamsType = {
  value: string;
  currency: "PLN";
};

export function cartItemSum({
  value,
  currency = "PLN",
}: CartItemSumParamsType) {
  const $panelBlock = div("panel-block is-justify-content-end");
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`;
  return $panelBlock;
}

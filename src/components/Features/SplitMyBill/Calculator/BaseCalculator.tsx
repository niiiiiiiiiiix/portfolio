interface BaseCalculator {
  totalCost: string,
  totalCount: string
}

export default function BaseCalculator({totalCost, totalCount}: BaseCalculator) {
  const finalCost: number = parseFloat(totalCost)
  const finalCount: number = parseFloat(totalCount)
  const costPerHead: number = finalCost / finalCount
  if (finalCount == 0) {
    return <div>Check value</div>
  }
  if (!isNaN(costPerHead)) {
    return <div>{costPerHead}</div>
  }
  else {
    return <div>Check value</div>
  }
}

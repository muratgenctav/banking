'use client'

import CountUp from "react-countup"

const AnimatedCounter = ({
    amount
}: {amount: number}) => {
  return (
    <CountUp 
      separator="."
      decimal="," 
      decimals={2}
      prefix="$"
      end={amount} 
    />
  )
}

export default AnimatedCounter
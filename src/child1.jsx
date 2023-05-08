import React, { memo } from 'react'

const Child1 = () => {
  console.log('Child 1 component')
  return <div>Child1</div>
}

export default memo(Child1, (prevProps, nextProps) => {
  return true
})

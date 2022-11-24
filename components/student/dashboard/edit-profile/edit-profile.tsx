import React from 'react'
import OtherInfo from './other-info'
import Sidebar from './sidebar'

type Props = {}

const EditProfile = (props: Props) => {
  return (
    <section className='grid  grid-cols-[375px_minmax(700px,_1fr)] gap-12 items-center w-fit mx-auto  mt-16'>
        <Sidebar/>
        <OtherInfo/>
    </section>
  )
}

export default EditProfile

import Cards from '@/components/Cards'
import HeroPage from '@/components/Hero'
import { client } from '@/sanity/lib/client'
import React from 'react'

const HomePage = async () => {
  const query = `* [_type == 'blog']  | order(_updatedAt asc) {
  Title,Description,image,
    "slug":slug.current
}`

const data:Blog[] = await client.fetch(query)

  return (
    <div>
      <HeroPage />
      <h1 className='text-2xl font-bold text-center mt-6 md:text-5xl'>Latest Blogs</h1>
      <div className='grid grid-cols-1  md:grid-cols-3'>
        {data.map((data:Blog) =>
      <Cards data={data} key={data.slug} />
        )}
      </div>
    </div>
  )
}

export default HomePage

import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

const  BlogPage = async ({params:{slug}}:{params:{slug:string}}) => {

const query = `* [_type == 'blog'  && slug.current == "${slug}"] {
  Title, Description, image, block
}[0]
`
const data = await client.fetch(query)
  
  return (
    <div>
      <div className="my-8  flex justify-center items-center">
        <div className="bg-red-100 shadow-lg w-[650px]">
          <h1 className="font-bold underline text-3xl text-center">
            {data.Title}
          </h1>
          <div className="flex items-center pt-8 justify-center">
            <Image
              src={urlFor(data.image).url()}
              alt="Flower 1"
              width={550}
              height={600}
            />
          </div>
          <section className="py-5 px-4 text-center">
            <PortableText value={data.block} />
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

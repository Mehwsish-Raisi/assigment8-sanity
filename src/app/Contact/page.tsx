import React from 'react'
import Link from 'next/link'

const ContactPage = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-red-500 md:mb-6 lg:text-3xl">
        Contact Us
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
      Feel free to reach out for collaborations or just a friendly hello!
      </p>
    </div>
    {/* text - end */}
    {/* form - start */}
    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="first-name"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          First name*
        </label>
        <input
          name="first-name"
          className="w-full rounded border bg-red-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring"
        />
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Last name*
        </label>
        <input
          name="last-name"
          className="w-full rounded border bg-red-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Email*
        </label>
        <input
          name="email"
          className="w-full rounded border bg-red-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring"
        />
      </div>
      
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Message*
        </label>
        <textarea
          name="message"
          className="h-64 w-full rounded border bg-red-50 px-3 py-2 text-gray-800 outline-none ring-red-300 transition duration-100 focus:ring"
          defaultValue={""}
        />
      </div>
      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none hover:bg-red-400 md:text-base">
          Send
        </button>
        
      </div>
      <p className="text-xs text-gray-400">
        By signing up to our newsletter you agree to our{" "}
        <Link
          href="#"
          className="underline transition duration-100 hover:text-red-500 active:text-red-600"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
    {/* form - end */}
  </div>
</div>

    </div>
  )
}

export default ContactPage

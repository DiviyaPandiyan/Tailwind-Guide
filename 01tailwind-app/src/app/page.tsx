import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl capitalize underline decoration-red-950 decoration-wavy decoration-3 underline-offset-6">
        hello world!
      </h1>
      <p className='break-all'>Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:uppercase to only apply the uppercase utility on hover
      Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:uppercase to only apply the uppercase utility on hover
      </p>
      <h1 className='truncate bg-orange-950 text-sky-200 font-bold p-6 m-4'>
      Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:uppercase to only apply the uppercase utility on hover
      </h1>
    </>
  );
}

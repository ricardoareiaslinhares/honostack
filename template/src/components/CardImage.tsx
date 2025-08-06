type CardImageProps = {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description?: string;
  aspectRatio?: string; // e.g. 'pt-[50%]', 'pt-[80%]'
};

export const CardImage = ({
  href,
  imageSrc,
  imageAlt = "Card Image",
  title,
  description,
  aspectRatio = "pt-[60%]",
}: CardImageProps) => {
  return (
    <a
      href={href}
      className="flex flex-col group bg-white border border-gray-200 shadow-2xs rounded-xl overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div className={`relative ${aspectRatio} rounded-t-xl overflow-hidden`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        {description && <p className="mt-1 text-gray-500 dark:text-neutral-400">{description}</p>}
      </div>
    </a>
  );
};

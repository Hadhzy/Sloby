//The projectCard preview image

import Image from 'next/image';

export default function  ProjectCardImage ({
  previewImage,
  title,
}: {
  previewImage: string;
  title: string;
}) {
  return (
    <div className={'flex flex-col bg-dark-darkest rounded-large font-bold'}>
      <Image
        alt="Project preview"
        src={previewImage}
        width={300}
        height={200}
        className={'rounded-t-large'}
      />
      <p className={'p-4 px-10 text-xl'}>{title}</p>
    </div>
  );
}

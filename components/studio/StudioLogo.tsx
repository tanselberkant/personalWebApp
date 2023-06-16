import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function StudioLogo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div>
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="/images/logo.png"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)} </>}
    </div>
  );
}

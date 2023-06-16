import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link className="text-[#F7AB0A] flex items-center " href="/">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#F7AB0A] flex items-center" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)} </>{' '}
    </div>
  );
}

import Image from 'next/image';
import { formatDate } from '@/utils/dateFormater';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

type Props = {
  repoCommits: any;
};

const RepoActivities = ({ repoCommits }: Props) => {
  return (
    <>
      <h2 className="text-2xl text-light-textHeader dark:text-dark-textHeader font-bold my-8">
        Recent Events About This Repo
      </h2>
      <div className="border-2 border-light-cardBorder dark:border-dark-cardBorder rounded-lg shadow-lg">
        {/* REPO OWNER */}
        <div className=" p-4">
          <div className="h-12 w-12 rounded-full flex items-center ">
            <Image
              src={repoCommits[0].author.avatar_url}
              className="w-full h-full object-contain rounded-full"
              width={100}
              height={100}
              alt="github-user-photo"
            />
            <a
              href="https://github.com/tanselberkant"
              target="_blank"
              className="text-light-textDescription dark:text-dark-textDescription underline text-lg ml-4"
            >
              github.com/tanselberkant
            </a>
          </div>
        </div>
        <div className="rounded-lg p-4 border-light-cardBorder dark:border-dark-cardBorder overflow-x-hidden h-96">
          <ul className="w-full overflow-y-auto overflow-x-hidden list-none m-0 p-0 h-[340px] space-y-4  ">
            {repoCommits.map((repo: any, index: any) => (
              <li
                key={index}
                className="border-2 border-light-cardBorder dark:border-dark-cardBorder p-2 rounded-lg"
              >
                {/* EVENT  */}
                <div className="flex items-center gap-4">
                  <div className="h-4 w-4 rounded-full  bg-light-textHeader dark:bg-dark-textHeader" />
                  <div className="text-light-textDescription dark:text-dark-textDescription font-semibold text-lg">
                    Event:
                  </div>
                  <div className="text-gray-500 text-sm ">Push Event</div>
                </div>
                {/* DATE */}
                <div className=" text-light-smallHeader dark:text-dark-smallHeader text-sm my-1">
                  {formatDate(repo.commit.author.date)}
                </div>
                {/* USER  */}
                <div className="my-2">
                  <p className="text-lg text-light-textDescription dark:text-dark-textDescription">
                    User:
                    <span className="text-gray-500 ml-2 text-sm">
                      tanselberkant
                    </span>
                  </p>
                  <p className="text-lg text-light-textDescription dark:text-dark-textDescription">
                    Repo:
                    <span className="text-gray-500 ml-2 text-sm">
                      tanselberkant/personalWebApp
                    </span>
                  </p>
                </div>
                {/* COMMIT  */}
                <div className="flex my-2">
                  <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-light-smallHeader dark:text-dark-smallHeader" />
                  <div className="ml-2 text-base text-light-textDescription dark:text-dark-textDescription">
                    Commits
                  </div>
                </div>
                {/* COMMIT MESSAGE */}
                <div className="text-gray-500 text-sm">
                  {repo.commit.message}{' '}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RepoActivities;

import githubService from '@/services/githubService';
import Layout from '@/components/layout/Layout';
import RepoActivities from '@/components/dashboard/RepoActivities';
import GithubActivities from '@/components/dashboard/GithubActivities';
import PostCategories from '@/components/dashboard/PostCategories';
import SiteVisitor from '@/components/dashboard/SiteVisitor';
import axios from 'axios';

export default async function DashboardPage() {
  const repoCommits: any = await getRepoCommits();
  const contributions: any = await getGitContributions();

  return (
    <>
      <Layout pageTitle="Dashboard" currentPath={'/dashboard'}>
        <div className=" mb-10 pb-20">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-4xl font-bold">
            Dashboard
          </h1>
          <div className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription text-lg">
            <p className="mb-4">
              Welcome to my personal dashboard, a detailed look into my ongoing
              journey in the realm of software development.
            </p>

            <p className="mb-4">
              {' '}
              On this dashboard, you'll find a comprehensive display of my
              written articles, categorized to showcase the diverse topics I've
              covered. Additionally, you can dive deep into my coding endeavors
              through GitHub activities and commits – these highlight my
              consistent efforts and progress in various projects.{' '}
            </p>

            <p className="mb-4">
              {' '}
              For those interested in the development of this very website,
              there's a dedicated section to monitor commits specific to this
              project's repository, offering a live glimpse into my work
              process.
            </p>

            <p className="mb-4">
              {' '}
              Furthermore, I'm working on incorporating a geographical
              representation of website visitors using Google Analytics. This
              will provide valuable insights into the global reach of my work,
              although this exciting feature is still under development and will
              be available soon.
            </p>

            <p className="mb-4">
              This dashboard is more than just a collection of data. It
              represents my growth, ambitions, and dedication to the world of
              coding. Enjoy exploring!
            </p>
          </div>
          <RepoActivities repoCommits={repoCommits} />
          <GithubActivities contrubitions={contributions} />
          <div className="grid grid-cols-12 gap-4 my-14  items-stretch">
            <div className=" col-span-12 md:col-span-6 ">
              <PostCategories />
            </div>
            <div className=" col-span-12 md:col-span-6 ">
              <SiteVisitor />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

const getRepoCommits = async () => {
  const res = await githubService.getPersonalWebAppReposCommits();
  return res;
};

const getGitContributions = async () => {
  const res = await axios.get(
    'https://github-contributions-api.jogruber.de/v4/tanselberkant?y=last'
  );

  return res.data;
};

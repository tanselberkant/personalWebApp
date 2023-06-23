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
          <p className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription text-lg">
            This is a Server-side rendered data visualization and analytics
            page. Data is sourced from a number of API's as well as locally
            sourced MDX files from around my site.
          </p>
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

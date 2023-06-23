import githubService from '@/services/githubService';
import Layout from '@/components/layout/Layout';
import RepoActivities from '@/components/dashboard/RepoActivities';
import GithubActivities from '@/components/dashboard/GithubActivities';
import axios from 'axios';

export default async function DashboardPage() {
  const repoCommits: any = await getRepoCommits();

  const contributions: any = await getGitContributions();

  return (
    <>
      <Layout pageTitle="Dashboard" currentPath={'/dashboard'}>
        <div className=" mb-10">
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

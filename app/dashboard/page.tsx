import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import githubService from '@/services/githubService';
import Layout from '@/components/layout/Layout';

export default async function DashboardPage() {
  return (
    <>
      <Layout pageTitle="Dashboard" currentPath={'/dashboard'}>
        <div className=" mb-10">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-2xl font-bold">
            Dashboard
          </h1>
          <p className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </Layout>
    </>
  );
}
// export const getServerSideProps: GetServerSideProps<{
//   repo: any;
// }> = async () => {
//   const repo = await githubService.getPersonalWebAppReposCommits();
//   console.log(repo);
//   return { props: { repo } };
// };

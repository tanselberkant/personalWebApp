import Layout from '@/components/layout/Layout';

export default async function ResumePage() {
  return (
    <>
      <Layout pageTitle="Resume" currentPath={'/resume'}>
        <div className=" mb-10">
          <h1 className=" text-light-textHeader dark:text-dark-textHeader uppercase text-2xl font-bold">
            Resume
          </h1>
          <p className="mt-1 mb-8 text-light-textDescription dark:text-dark-textDescription">
            Here you can check my resume
          </p>
        </div>
      </Layout>
    </>
  );
}

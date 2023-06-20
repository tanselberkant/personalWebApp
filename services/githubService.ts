import { AxiosResponse } from 'axios';
import gitHttpClient from '@/utils/gitHttpClient';

class GitHubService {
  responseBody = (response: AxiosResponse) => response.data;

  public async getPersonalWebAppReposCommits() {
    const { data } = await gitHttpClient.get(
      'repos/tanselberkant/personalWebApp/commits'
    );
    return data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GitHubService();

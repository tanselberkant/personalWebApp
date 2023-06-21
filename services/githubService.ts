import { AxiosResponse } from 'axios';
import gitHttpClient from '@/utils/gitHttpClient';

class GitHubService {
  public async getPersonalWebAppReposCommits() {
    const response = await gitHttpClient.get(
      'repos/tanselberkant/personalWebApp/commits'
    );
    return response.data;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GitHubService();

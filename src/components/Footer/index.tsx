import {BookFilled, GithubOutlined} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '微辣';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'GitHub',
          title: 'GitHub',
          href: '',
          // blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: '',
          blankTarget: true,
        },
        // {
        //   key: 'blob',
        //   title: <BookFilled />,
        //   href: 'https://isxiaochen.github.io/',
        //   blankTarget: true,
        // }
        // {
        //   key: '粤ICP备2023089497',
        //   title: '粤ICP备2023089497',
        //   href: 'https://beian.miit.gov.cn/',
        //   // blankTarget: true,
        // },
      ]}
    />
  );
};
export default Footer;

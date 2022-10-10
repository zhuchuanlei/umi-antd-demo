import react from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Link } from 'umi';

const BasicLayout = (props: any) => {
  return (
    <ProLayout
      fixSiderbar
      defaultCollapsed
      breakpoint={false}
      route={props.route}
      menuItemRender={(props: any) => {
        return <Link to={props.path}>{props.name}</Link>
      }}
    >
      {props.children}
    </ProLayout>
  );
};

export default BasicLayout;
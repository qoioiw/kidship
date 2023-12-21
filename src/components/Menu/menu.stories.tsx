import {Menu} from './menu';
import {MenuItem} from './menuItem';
import {SubMenu} from './subMenu';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    onSelect: { action: 'selected' },
  },
  tags: ["autodocs"],
};
export const DefaultMenu =()=>(
  <Menu onSelect={function noRefCheck(){}}>
  <MenuItem>
    cool link
  </MenuItem>
  <MenuItem>
    cool link 2
  </MenuItem>
  <MenuItem disabled>
    disabled
  </MenuItem>
  <SubMenu title="下拉选项">
    <MenuItem>
      下拉选项一
    </MenuItem>
    <MenuItem>
      下拉选项二
    </MenuItem>
  </SubMenu>
</Menu>
)
DefaultMenu.storyName = "默认 Menu";

export const VerticalCompontanrt = ()=>(
   <Menu
  mode="vertical"
  onSelect={function noRefCheck(){}}
>
  <MenuItem>
    cool link
  </MenuItem>
  <MenuItem>
    cool link 2
  </MenuItem>
  <SubMenu title="点击下拉选项">
    <MenuItem>
      下拉选项一
    </MenuItem>
    <MenuItem>
      下拉选项二
    </MenuItem>
  </SubMenu>
</Menu>
)
VerticalCompontanrt.storyName = "纵向的 Menu";



export const VerticalOpenCompontanrt =()=>(
  <Menu
  defaultOpenSubMenus={[
    '2'
  ]}
  mode="vertical"
  onSelect={function noRefCheck(){}}
>
  <MenuItem>
    cool link
  </MenuItem>
  <MenuItem>
    cool link 2
  </MenuItem>
  <SubMenu title="默认展开下拉选项">
    <MenuItem>
      下拉选项一
    </MenuItem>
    <MenuItem>
      下拉选项二
    </MenuItem>
  </SubMenu>
</Menu>
)

VerticalOpenCompontanrt.storyName = "默认展开纵向的 Menu";

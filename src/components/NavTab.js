import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import CSECourse from './CSECourse';
import GRACourse from './GRACourse';
import MTHCourse from './MTHCourse';
import GNSCourse from './GNSCourse';

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #5c5c5c;
  cursor: pointer;
  font-size: 0.775rem;
  font-weight: bold;
  background-color: transparent;
  width: 100px;
  padding: 6px 8px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  outline: 1px solid #ededed;

  &:hover {
    background-color: transparent;
    color: ${blue[500]};
    outline: 2px solid ${blue[200]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 1px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;

export default function NavTab() {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList sx={{ ml: 1 }}>
                <Tab>GNS405</Tab>
                <Tab>CSE177</Tab>
                <Tab>GRA415</Tab>
                <Tab>MTH734</Tab>
            </TabsList>
            <TabPanel value={0}><GNSCourse /></TabPanel>
            <TabPanel value={1}><CSECourse /></TabPanel>
            <TabPanel value={2}><GRACourse /></TabPanel>
            <TabPanel value={3}><MTHCourse /></TabPanel>
        </TabsUnstyled>
    );
}

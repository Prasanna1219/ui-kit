import React from 'react';
import { Button } from '../components/atoms/Button/Button.jsx';
import { IconButton } from '../components/atoms/IconButton/IconButton.jsx';
import { InputField } from '../components/atoms/InputField/InputField.jsx';
import { Badge } from '../components/atoms/Badge/Badge.jsx';
import { Avatar } from '../components/atoms/Avatar/Avatar.jsx';
import { Checkbox } from '../components/atoms/Checkbox/Checkbox.jsx';
import { Toggle } from '../components/atoms/Toggle/Toggle.jsx';
import { RadioButton } from '../components/atoms/RadioButton/RadioButton.jsx';
import { Toast } from '../components/atoms/Toast/Toast.jsx';
import { Dropdown } from '../components/atoms/Dropdown/Dropdown.jsx';
import { ButtonGroup } from '../components/atoms/ButtonGroup/ButtonGroup.jsx';
import { Image as UIImage } from '../components/atoms/Image/Image.jsx';
import { Spinner } from '../components/atoms/Spinner/Spinner.jsx';
import { ProgressBar } from '../components/atoms/ProgressBar/ProgressBar.jsx';
import { Skeleton } from '../components/atoms/Skeleton/Skeleton.jsx';
import { Divider } from '../components/atoms/Divider/Divider.jsx';
import { Slider } from '../components/atoms/Slider/Slider.jsx';
import { Tooltip } from '../components/atoms/Tooltip/Tooltip.jsx';
import { Card } from '../components/molecules/Card/Card.jsx';
import { Sidebar } from '../components/molecules/Sidebar/Sidebar.jsx';
import { MenuBar } from '../components/molecules/MenuBar/MenuBar.jsx';
import { Calendar } from '../components/molecules/Calendar/Calendar.jsx';
import { Modal } from '../components/molecules/Modal/Modal.jsx';
import { Tabs, Tab } from '../components/molecules/Tabs/Tabs.jsx';
import { Accordion } from '../components/molecules/Accordion/Accordion.jsx';
import { Pagination } from '../components/molecules/Pagination/Pagination.jsx';
import { Alert } from '../components/molecules/Alert/Alert.jsx';
import { Breadcrumbs, BreadcrumbItem } from '../components/molecules/Breadcrumbs/Breadcrumbs.jsx';
import { DataTable } from '../components/organisms/DataTable/DataTable.jsx';
import { Home, Settings, Users, Bell, Search } from 'lucide-react';

export const registry = {
    Button: {
        component: Button,
        group: 'Atoms',
        defaults: { children: 'Click me', variant: 'primary', size: 'md', disabled: false, loading: false },
        schema: {
            children: { type: 'text', label: 'Label' },
            variant: { type: 'select', label: 'Variant', options: ['primary', 'secondary', 'ghost', 'danger'] },
            size: { type: 'select', label: 'Size', options: ['sm', 'md', 'lg'] },
            disabled: { type: 'boolean', label: 'Disabled' },
            loading: { type: 'boolean', label: 'Loading' },
        },
        tokenOverrides: ['--color-primary-500', '--color-primary-600', '--radius-md', '--font-size-base', '--font-weight-medium'],
    },
    IconButton: {
        component: IconButton,
        group: 'Atoms',
        defaults: { icon: null, variant: 'primary', size: 'md', disabled: false, shape: 'rounded', 'aria-label': 'Action' },
        schema: {
            variant: { type: 'select', label: 'Variant', options: ['primary', 'secondary', 'ghost', 'danger'] },
            size: { type: 'select', label: 'Size', options: ['sm', 'md', 'lg'] },
            shape: { type: 'select', label: 'Shape', options: ['rounded', 'circle', 'square'] },
            disabled: { type: 'boolean', label: 'Disabled' },
            'aria-label': { type: 'text', label: 'Aria Label' },
        },
        tokenOverrides: ['--color-primary-500', '--radius-md', '--radius-full', '--radius-none', '--transition-fast'],
        renderOverride: (props) => <IconButton {...props} icon={<Bell size={18} />} />,
    },
    InputField: {
        component: InputField,
        group: 'Atoms',
        defaults: { label: 'Email', placeholder: 'Enter email...', value: '', error: '', helperText: 'We never share your email', disabled: false, size: 'md' },
        schema: {
            label: { type: 'text', label: 'Label' },
            placeholder: { type: 'text', label: 'Placeholder' },
            value: { type: 'text', label: 'Value' },
            error: { type: 'text', label: 'Error message' },
            helperText: { type: 'text', label: 'Helper text' },
            size: { type: 'select', label: 'Size', options: ['sm', 'md', 'lg'] },
            disabled: { type: 'boolean', label: 'Disabled' },
        },
        tokenOverrides: ['--color-primary-500', '--color-primary-100', '--color-danger-500', '--radius-md', '--font-size-base'],
    },
    Badge: {
        component: Badge,
        group: 'Atoms',
        defaults: { children: 'Badge', variant: 'primary', size: 'md', dot: false },
        schema: {
            children: { type: 'text', label: 'Label' },
            variant: { type: 'select', label: 'Variant', options: ['default', 'primary', 'success', 'warning', 'danger', 'info'] },
            size: { type: 'select', label: 'Size', options: ['sm', 'md'] },
            dot: { type: 'boolean', label: 'Show dot' },
        },
        tokenOverrides: ['--color-primary-100', '--color-primary-700', '--radius-full', '--font-size-sm', '--font-weight-medium'],
    },
    Avatar: {
        component: Avatar,
        group: 'Atoms',
        defaults: { src: '', alt: 'John Doe', size: 'md', fallback: 'JD', shape: 'circle' },
        schema: {
            src: { type: 'text', label: 'Image URL' },
            alt: { type: 'text', label: 'Alt text' },
            fallback: { type: 'text', label: 'Initials fallback' },
            size: { type: 'select', label: 'Size', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
            shape: { type: 'select', label: 'Shape', options: ['circle', 'square'] },
        },
        tokenOverrides: ['--color-primary-100', '--color-primary-700', '--radius-full', '--radius-md', '--font-weight-semibold'],
    },
    Checkbox: {
        component: Checkbox,
        group: 'Atoms',
        defaults: { checked: false, label: 'Accept terms', disabled: false, indeterminate: false },
        schema: {
            label: { type: 'text', label: 'Label' },
            checked: { type: 'boolean', label: 'Checked' },
            disabled: { type: 'boolean', label: 'Disabled' },
            indeterminate: { type: 'boolean', label: 'Indeterminate' },
        },
        tokenOverrides: ['--color-primary-500', '--color-primary-100', '--radius-sm', '--color-neutral-300', '--transition-fast'],
    },
    Toggle: {
        component: Toggle,
        group: 'Atoms',
        defaults: { checked: false, label: 'Enable notifications', disabled: false, size: 'md' },
        schema: {
            label: { type: 'text', label: 'Label' },
            checked: { type: 'boolean', label: 'On' },
            disabled: { type: 'boolean', label: 'Disabled' },
            size: { type: 'select', label: 'Size', options: ['sm', 'md'] },
        },
        tokenOverrides: ['--color-primary-500', '--color-neutral-300', '--radius-full', '--transition-normal', '--shadow-sm'],
    },
    RadioButton: {
        component: RadioButton,
        group: 'Atoms',
        defaults: { value: 'option1', checked: true, label: 'Option 1', disabled: false, name: 'radio-group' },
        schema: {
            label: { type: 'text', label: 'Label' },
            value: { type: 'text', label: 'Value' },
            checked: { type: 'boolean', label: 'Checked' },
            disabled: { type: 'boolean', label: 'Disabled' },
        },
        tokenOverrides: ['--color-primary-500', '--color-primary-100', '--radius-full', '--color-neutral-300', '--transition-fast'],
    },
    Toast: {
        component: Toast,
        group: 'Atoms',
        defaults: { message: 'Action completed successfully!', variant: 'success', duration: 0 },
        schema: {
            message: { type: 'text', label: 'Message' },
            variant: { type: 'select', label: 'Variant', options: ['success', 'warning', 'danger', 'info'] },
        },
        tokenOverrides: ['--color-success-50', '--color-success-700', '--radius-lg', '--shadow-lg', '--font-size-sm'],
    },
    Dropdown: {
        component: Dropdown,
        group: 'Atoms',
        defaults: {
            options: [
                { label: 'React', value: 'react' },
                { label: 'Vue', value: 'vue' },
                { label: 'Angular', value: 'angular' },
                { label: 'Svelte', value: 'svelte' },
            ],
            value: 'react', placeholder: 'Select framework...', disabled: false,
        },
        schema: {
            value: { type: 'select', label: 'Selected', options: ['react', 'vue', 'angular', 'svelte'] },
            placeholder: { type: 'text', label: 'Placeholder' },
            disabled: { type: 'boolean', label: 'Disabled' },
        },
        tokenOverrides: ['--color-primary-500', '--color-primary-50', '--radius-md', '--shadow-lg', '--z-dropdown'],
    },
    ButtonGroup: {
        component: ButtonGroup,
        group: 'Atoms',
        defaults: { orientation: 'horizontal' },
        schema: {
            orientation: { type: 'select', label: 'Orientation', options: ['horizontal', 'vertical'] },
        },
        tokenOverrides: ['--color-primary-500', '--color-primary-600', '--radius-md', '--font-weight-medium', '--transition-fast'],
        renderOverride: (props) => (
            <ButtonGroup {...props}>
                <Button variant="secondary">Day</Button>
                <Button variant="secondary">Week</Button>
                <Button variant="secondary">Month</Button>
            </ButtonGroup>
        ),
    },
    Image: {
        component: UIImage,
        group: 'Atoms',
        defaults: { src: 'https://picsum.photos/300/200', alt: 'Sample image', width: 300, height: 200, fit: 'cover', radius: 'md' },
        schema: {
            src: { type: 'text', label: 'Image URL' },
            alt: { type: 'text', label: 'Alt text' },
            fit: { type: 'select', label: 'Object fit', options: ['cover', 'contain', 'fill'] },
            radius: { type: 'select', label: 'Radius', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
        },
        tokenOverrides: ['--radius-md', '--radius-lg', '--color-neutral-100', '--color-neutral-200', '--transition-fast'],
    },
    Card: {
        component: Card,
        group: 'Molecules',
        defaults: { padding: 'md', shadow: 'md', radius: 'lg', hoverable: false },
        schema: {
            padding: { type: 'select', label: 'Padding', options: ['none', 'sm', 'md', 'lg'] },
            shadow: { type: 'select', label: 'Shadow', options: ['none', 'sm', 'md', 'lg'] },
            radius: { type: 'select', label: 'Radius', options: ['md', 'lg', 'xl'] },
            hoverable: { type: 'boolean', label: 'Hoverable' },
        },
        tokenOverrides: ['--color-neutral-50', '--color-neutral-200', '--shadow-md', '--shadow-xl', '--radius-lg'],
        renderOverride: (props) => (
            <Card {...props}>
                <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-neutral-900)' }}>
                    <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 8 }}>Card title</div>
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-neutral-500)' }}>This is the card body content area. It can hold any React children.</div>
                </div>
            </Card>
        ),
    },
    Sidebar: {
        component: Sidebar,
        group: 'Molecules',
        defaults: { collapsed: false },
        schema: {
            collapsed: { type: 'boolean', label: 'Collapsed' },
        },
        tokenOverrides: ['--color-neutral-50', '--color-neutral-200', '--color-primary-50', '--color-primary-700', '--radius-md'],
        renderOverride: (props) => (
            <div style={{ height: 320, display: 'flex' }}>
                <Sidebar
                    {...props}
                    logo={<span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--font-size-lg)', color: 'var(--color-primary-600)' }}>Logo</span>}
                    onToggle={() => { }}
                    items={[
                        { icon: <Home size={18} />, label: 'Home', href: '#', active: true },
                        { icon: <Users size={18} />, label: 'Users', href: '#' },
                        { icon: <Bell size={18} />, label: 'Alerts', href: '#' },
                        { icon: <Settings size={18} />, label: 'Settings', href: '#' },
                    ]}
                />
            </div>
        ),
    },
    MenuBar: {
        component: MenuBar,
        group: 'Molecules',
        defaults: {},
        schema: {},
        tokenOverrides: ['--color-neutral-50', '--color-neutral-200', '--shadow-sm', '--font-size-sm', '--radius-md'],
        renderOverride: (props) => (
            <div style={{ width: '100%' }}>
                <MenuBar
                    {...props}
                    logo={<span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--color-primary-600)' }}>MyApp</span>}
                    items={[
                        { label: 'Products', children: [{ label: 'Overview' }, { label: 'Pricing' }] },
                        { label: 'Docs', children: [{ label: 'Getting started' }, { label: 'API reference' }] },
                        { label: 'Blog' },
                    ]}
                />
            </div>
        ),
    },
    Calendar: {
        component: Calendar,
        group: 'Molecules',
        defaults: { value: new Date() },
        schema: {},
        tokenOverrides: ['--color-primary-500', '--color-neutral-50', '--color-neutral-200', '--radius-lg', '--shadow-md'],
        renderOverride: (props) => <Calendar {...props} onChange={() => { }} />,
    },
    Tooltip: {
        component: Tooltip,
        group: 'Atoms',
        defaults: { children: <span>Hover me</span>, content: 'Tooltip content', position: 'top', delay: 200 },
        schema: {
            position: { type: 'select', label: 'Position', options: ['top', 'bottom', 'left', 'right'] },
            delay: { type: 'text', label: 'Delay (ms)' },
        },
        tokenOverrides: ['--color-neutral-800', '--radius-sm', '--font-size-xs', '--transition-fast'],
    },
    Spinner: {
        component: Spinner,
        group: 'Atoms',
        defaults: { size: 'md', color: 'var(--color-primary-500)' },
        schema: {
            size: { type: 'select', label: 'Size', options: ['sm', 'md', 'lg', 'xl'] },
        },
        tokenOverrides: ['--color-primary-500'],
    },
    ProgressBar: {
        component: ProgressBar,
        group: 'Atoms',
        defaults: { value: 65, max: 100, size: 'md', showLabel: true },
        schema: {
            value: { type: 'text', label: 'Value' },
            max: { type: 'text', label: 'Max' },
            size: { type: 'select', label: 'Size', options: ['sm', 'md', 'lg'] },
            showLabel: { type: 'boolean', label: 'Show Label' },
        },
        tokenOverrides: ['--color-primary-500', '--color-neutral-200', '--radius-full'],
    },
    Slider: {
        component: Slider,
        group: 'Atoms',
        defaults: { value: 50, min: 0, max: 100, step: 1, label: 'Volume', showValue: true, disabled: false },
        schema: {
            label: { type: 'text', label: 'Label' },
            value: { type: 'text', label: 'Value' },
            step: { type: 'text', label: 'Step' },
            showValue: { type: 'boolean', label: 'Show Value' },
            disabled: { type: 'boolean', label: 'Disabled' },
        },
        tokenOverrides: ['--color-primary-500', '--color-primary-100', '--color-neutral-200', '--radius-full'],
        renderOverride: (props) => {
            const [val, setVal] = React.useState(props.value);
            return <Slider {...props} value={val} onChange={(e) => setVal(Number(e.target.value))} />;
        },
    },
    Skeleton: {
        component: Skeleton,
        group: 'Atoms',
        defaults: { variant: 'rectangular', width: '200px', height: '100px', radius: '8px' },
        schema: {
            variant: { type: 'select', label: 'Variant', options: ['text', 'circular', 'rectangular'] },
            width: { type: 'text', label: 'Width' },
            height: { type: 'text', label: 'Height' },
            radius: { type: 'text', label: 'Radius' },
        },
        tokenOverrides: ['--color-neutral-100', '--color-neutral-200'],
    },
    Divider: {
        component: Divider,
        group: 'Atoms',
        defaults: { orientation: 'horizontal', label: 'or', labelPosition: 'center' },
        schema: {
            orientation: { type: 'select', label: 'Orientation', options: ['horizontal', 'vertical'] },
            label: { type: 'text', label: 'Label' },
            labelPosition: { type: 'select', label: 'Label Position', options: ['left', 'center', 'right'] },
        },
        tokenOverrides: ['--color-neutral-200', '--color-neutral-500'],
        renderOverride: (props) => (
            <div style={{ width: '100%', height: '100px', display: 'flex', flexDirection: props.orientation === 'vertical' ? 'row' : 'column', justifyContent: 'center' }}>
                <div>Content A</div>
                <Divider {...props} />
                <div>Content B</div>
            </div>
        ),
    },
    Modal: {
        component: Modal,
        group: 'Molecules',
        defaults: { open: true, title: 'Settings', size: 'md', closeOnOverlayClick: true },
        schema: {
            title: { type: 'text', label: 'Title' },
            size: { type: 'select', label: 'Size', options: ['sm', 'md', 'lg', 'full'] },
            closeOnOverlayClick: { type: 'boolean', label: 'Close on overlay click' },
        },
        tokenOverrides: ['--color-neutral-50', '--radius-lg', '--shadow-xl', '--color-neutral-200', '--z-modal'],
        renderOverride: (props) => {
            const [open, setOpen] = React.useState(false);
            return (
                <div>
                    <button style={{ padding: '8px 16px' }} onClick={() => setOpen(true)}>Open Modal</button>
                    <Modal {...props} open={open} onClose={() => setOpen(false)} footer={<button onClick={() => setOpen(false)}>Save Changes</button>}>
                        <p>This is the modal body content. It can contain forms, text, or any React elements.</p>
                    </Modal>
                </div>
            );
        },
    },
    Tabs: {
        component: Tabs,
        group: 'Molecules',
        defaults: { variant: 'line', defaultIndex: 0 },
        schema: {
            variant: { type: 'select', label: 'Variant', options: ['line', 'pills'] },
        },
        tokenOverrides: ['--color-primary-600', '--color-primary-500', '--color-neutral-200', '--color-neutral-100', '--radius-full'],
        renderOverride: (props) => (
            <div style={{ width: '100%' }}>
                <Tabs {...props}>
                    <Tab label="Profile">Profile content goes here.</Tab>
                    <Tab label="Security">Security settings and password management.</Tab>
                    <Tab label="Billing" disabled>Billing information (Disabled tab).</Tab>
                </Tabs>
            </div>
        ),
    },
    Accordion: {
        component: Accordion,
        group: 'Molecules',
        defaults: { allowMultiple: false },
        schema: {
            allowMultiple: { type: 'boolean', label: 'Allow Multiple Open' },
        },
        tokenOverrides: ['--color-neutral-50', '--color-neutral-200', '--color-neutral-100', '--radius-lg', '--color-primary-500'],
        renderOverride: (props) => (
            <div style={{ width: '100%', maxWidth: '500px' }}>
                <Accordion {...props} items={[
                    { title: 'What is your refund policy?', content: 'If you are unhappy with your purchase, contact us within 30 days.' },
                    { title: 'Do you offer technical support?', content: 'Yes, we offer email support to all customers 24/7.' },
                    { title: 'Is it subscription based?', content: 'No, this is a one-time purchase with lifetime updates.' }
                ]} />
            </div>
        ),
    },
    Pagination: {
        component: Pagination,
        group: 'Molecules',
        defaults: { currentPage: 1, totalPages: 10 },
        schema: {
            currentPage: { type: 'text', label: 'Current Page' },
            totalPages: { type: 'text', label: 'Total Pages' },
        },
        tokenOverrides: ['--color-primary-500', '--color-neutral-100', '--color-neutral-200', '--radius-md'],
        renderOverride: (props) => {
            const [page, setPage] = React.useState(Number(props.currentPage) || 1);
            return <Pagination {...props} currentPage={page} totalPages={Number(props.totalPages) || 10} onChange={setPage} />;
        },
    },
    Alert: {
        component: Alert,
        group: 'Molecules',
        defaults: { variant: 'info', title: 'Update available', children: 'A new software version is ready to be installed.' },
        schema: {
            variant: { type: 'select', label: 'Variant', options: ['info', 'success', 'warning', 'danger'] },
            title: { type: 'text', label: 'Title' },
            children: { type: 'text', label: 'Message' },
        },
        tokenOverrides: ['--color-info-50', '--color-info-600', '--color-info-900', '--radius-md'],
        renderOverride: (props) => <Alert {...props} onClose={() => alert('Closed alert!')} />,
    },
    Breadcrumbs: {
        component: Breadcrumbs,
        group: 'Molecules',
        defaults: {},
        schema: {},
        tokenOverrides: ['--color-neutral-400', '--color-primary-600', '--color-primary-500', '--font-size-sm'],
        renderOverride: (props) => (
            <Breadcrumbs {...props}>
                <BreadcrumbItem href="#">Home</BreadcrumbItem>
                <BreadcrumbItem href="#">Settings</BreadcrumbItem>
                <BreadcrumbItem>Account</BreadcrumbItem>
            </Breadcrumbs>
        ),
    },
    DataTable: {
        component: DataTable,
        group: 'Organisms',
        defaults: { selectable: true },
        schema: {
            selectable: { type: 'boolean', label: 'Selectable Rows' },
        },
        tokenOverrides: ['--color-neutral-50', '--color-neutral-100', '--color-neutral-200', '--color-primary-50', '--radius-lg'],
        renderOverride: (props) => (
            <div style={{ width: '100%' }}>
                <DataTable
                    {...props}
                    columns={[
                        { key: 'name', label: 'Name', sortable: true },
                        { key: 'role', label: 'Role', sortable: true },
                        { key: 'status', label: 'Status', render: (val) => <span style={{ color: val === 'Active' ? 'green' : 'red' }}>{val}</span> }
                    ]}
                    data={[
                        { name: 'Alice Smith', role: 'Admin', status: 'Active' },
                        { name: 'Bob Jones', role: 'Editor', status: 'Inactive' },
                        { name: 'Charlie Day', role: 'Viewer', status: 'Active' },
                    ]}
                    onSelectionChange={(rows) => console.log('Selected:', rows)}
                />
            </div>
        ),
    },
};

export const groups = {
    Atoms: Object.keys(registry).filter(k => registry[k].group === 'Atoms'),
    Molecules: Object.keys(registry).filter(k => registry[k].group === 'Molecules'),
    Organisms: Object.keys(registry).filter(k => registry[k].group === 'Organisms'),
};

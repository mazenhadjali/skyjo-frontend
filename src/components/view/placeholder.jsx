export const Placeholder = ({ name }) => (
    <div style={{ padding: 16 }}>
        {name ? `${name} page coming soon` : 'Page coming soon'}
    </div>
);
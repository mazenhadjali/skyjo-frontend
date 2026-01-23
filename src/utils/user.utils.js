export const getInitials = (user) => {
    if (!user) return 'U';

    // Try to use firstname and lastname
    if (user.firstname && user.lastname) {
        return (user.firstname[0] + user.lastname[0]).toUpperCase();
    }

    // If only one name is available, use username
    if (user.firstname || user.lastname) {
        const name = user.username || user.email;
        if (!name) return 'U';
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    }

    // Fall back to username or email
    const name = user.username || user.email;
    if (!name) return 'U';
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};


export const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
}
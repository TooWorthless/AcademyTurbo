{
    type AuthMethod = {
        type: 'email',
        email: string,
        password: string
    } | {
        type: 'oauth',
        provider: 'google' | 'github',
        token: string
    }
}
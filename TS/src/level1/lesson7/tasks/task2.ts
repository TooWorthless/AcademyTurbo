{
    enum Role {
        Admin = 'admin',
        User = 'user',
        Guest = 'guest'
    }

    function hasAccess(role: Role): boolean {
        return role === Role.Admin ? true : false;
    }
}
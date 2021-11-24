

describe('Main Page', () => {
    it('Verify navbar items', () => {
        browser.url('/dashboard');
        
        const navText = $$('#tabbar-links');
        
        expect(navText).toHaveTextContaining([
            'Dashboard',
            'Users',
            'Messages',
            'RS/RSS/OSS',
            'Reports',
            'Referrals',
            'RikiTikiTavi',
        ]);
        //console.log(await navText.getText());

    });
       
});


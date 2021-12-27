class main_menu {
    constructor() {
        
        let isSwitched = false;

        $('#header_menu_navPoint01').click(function (e) { 
            e.preventDefault();
            isSwitched = !isSwitched;
            translateMenu();
        });

        $('#header_menu_navPoint02').click(function (e) { 
            e.preventDefault();
            isSwitched = !isSwitched;
            translateMenu();
        });

        async function translateMenu() {
            if (isSwitched) {

                $('#header_menu_navPoint02').css('transform', 'translateY(0px)');
                $('#header_menu_navPoint02').css('background-color', '#fff');

                $('#header_menu_line02').css('transform', 'translateY(-60px)');
                
                await sleep(50);

                $('#header_menu_navPoint01').css('transform', 'translateY(-18.75px) scale(0.6)');
                $('#header_menu_navPoint01').css('background-color', '#aaa');

                $('#header_menu_line01').css('transform', 'translateY(-60px)');

            } else {
                
                $('#header_menu_navPoint01').css('transform', 'translateY(0px)');
                $('#header_menu_navPoint01').css('background-color', '#fff');

                $('#header_menu_line01').css('transform', 'translateY(0px)');

                await sleep(50);

                $('#header_menu_navPoint02').css('transform', 'translateY(18.75px) scale(0.6)');
                $('#header_menu_navPoint02').css('background-color', '#aaa');

                $('#header_menu_line02').css('transform', 'translateY(0px)');

            }
        }

        function sleep(ms) {
            return new Promise((accept) => {
                setTimeout(() => {
                accept();
                }, ms);
            });
        }

    }
}

new main_menu();
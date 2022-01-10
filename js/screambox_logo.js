class screambox_logo {
    constructor() {

        let isTextVisible = false;

        let mouseXrel = 0;
        let mouseYrel = 0;

        let dist = 0;

        let screenWidth = $(document).width();
        let screenHeight = $(document).height();

        $(document).mousemove(function (e) { 
            
            mouseXrel = mouseX / screenWidth * 100;
            mouseYrel = mouseY / screenHeight * 100;

            dist = Math.sqrt(Math.pow(50-mouseXrel, 2) + Math.pow(50-mouseYrel, 2));


            $('#layer_logo img').css('transform', `scale(${1 - dist/1000}) translate(${(50 - mouseXrel) / 5}px, ${(50 - mouseYrel) / 5}px)`);
            $('#layer_logo img').css('filter', `drop-shadow(#00000055 ${-(50 - mouseXrel)/5}px ${-(50 - mouseYrel)/5}px ${(dist/30) + 5}px)`);

        });

        $('#layer_logo img').click(function (e) { 
            e.preventDefault();
            toggleText();
        });

        $('#layer_text').click(function (e) { 
            e.preventDefault();
            toggleText();
        });

        function toggleText() { 

            if (!isTextVisible) {

                isTextVisible = true;

                $('#layer_logo').css('opacity', '50%');
                $('#layer_logo').css('filter', 'blur(10px)');
                $('#layer_text').css('opacity', '100%');
                $('#layer_text').css('background-color', '#00000055');
                $('#layer_text').css('pointer-events', 'visible');
                
            } else {

                isTextVisible = false;

                $('#layer_logo').css('opacity', '100%');
                $('#layer_logo').css('filter', '')
                $('#layer_text').css('opacity', '0');
                $('#layer_text').css('background-color', '#000000ff');
                $('#layer_text').css('pointer-events', 'none');

            }

        }

    }
}

new screambox_logo();
//your JS code here. If required.
     let panels = document.querySelectorAll(".panel");

        panels.forEach(function(panel) {

            panel.addEventListener("click", function() {

                // Remove active from all panels
                panels.forEach(function(item) {
                    item.classList.remove("active");
                });

                // Add active to clicked panel
                panel.classList.add("active");

            });

        });
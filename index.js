const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

const testimonials = [
    {
        text:
            "Recently visited health check up department of Medilab Hospital for a whole body check up. The entire process from check in to the end was seamless. The staff at the health check department was courteous, helpful and very attentive. I would highly recommend this hospital to anyone looking for something similar services.",
        star: 5
    },
    {
        text:
            "In Medilab hospital Dr.Robert Chege is of great help to patients excellent way of speaking Guidense.. I felt very Happy with this people.. I strongly recommend to my Friends n Relatives to this Medilab Hospital",
        star: 3
    },
    {
        text:
            "It's very well mannered staff good coordination with patients. Dr Grace assisted very well and taken good care towards patients. Overall experience is satisfactory",
        star: 4
    }
];

(function(arr) {
    const target = document.getElementById("testimonials");
    target.classList.add("text-center");

    const fragment = document.createDocumentFragment();
    
    // Get all the templates
    arr.forEach((item, index, arr) => {
        createTestimonialTemplate(item);
    });

    // Templates
    function createTestimonialTemplate({ star, text }) {
        const div = document.createElement("div");
        div.classList.add("testimonial");
        div.classList.add("d-none");
        
        // Stars template
        const starsWrapper = document.createElement("div");
        starsWrapper.classList.add("stars-wrapper", "mt-5");
        while (star--) {
            const starWrapper = document.createElement("div");
            starWrapper.classList.add("star-wrapper");
            
            const starIcon = document.createElement("i");
            starIcon.classList.add("fa", "fa-star", "star");
            starWrapper.appendChild(starIcon);
            
            const insideStar = document.createElement("i");
            insideStar.classList.add("fa", "fa-star", "inside-star");
            starWrapper.appendChild(insideStar);
            
            starsWrapper.appendChild(starWrapper);
        }
        div.appendChild(starsWrapper);
        
        // Text template
        const p = document.createElement("p");
        p.classList.add("mt-4");
        p.textContent = text;
        div.appendChild(p);
        
        // Append template
        fragment.appendChild(div);
    }
    
    target.appendChild(fragment);
    
    // Animation
    function animation(){
        const timeTestimonialAppear = 10000;
        [...target.children].forEach((item, index, arr) => {

            // Appear
            const timerAppearing = setTimeout(function(){
                
                // Appearing
                item.classList.remove("d-none");
                
                // Animation
                const stars = item.querySelectorAll(".star-wrapper");
                let starsLength = stars.length;
                
                // Star appearing
                setTimeout(function() {
                    for (let i = 0; i < starsLength; i++) {
                        setTimeout(function(){
                            stars[i].classList.add("active");
                        }, 250 * i)
                    }
                }, 250) 
                
                // Star disappearing
                setTimeout(function() {
                    for (let i = 0; i < starsLength; i++) {
                        setTimeout(function(){
                            stars[i].classList.remove("active");
                        }, 250 * i)
                    }     
                }, timeTestimonialAppear - 250 * (starsLength + 1));
                
                // Paragraph
                const par = item.querySelector("p");
                setTimeout(function() {
                    par.classList.add("active");
                }, 250)
                
                setTimeout(function() {
                    par.classList.remove("active");
                }, timeTestimonialAppear - 250 * (starsLength + 1));
                
                // Disappearing testimonial
                // If the first item or not the first item
                if (index === 0) {
                    arr[arr.length - 1].classList.add("d-none");
                } else {
                    arr[index - 1].classList.add("d-none");
                }
                
                // If the last item
                if (index === arr.length - 1) {
                    clearTimeout(timerAppearing);
                    // Infinit loop
                    setTimeout(animation, timeTestimonialAppear);
                }
                
            },timeTestimonialAppear * index);
        })
    }
    
    setTimeout(animation, 2000);
    
})(testimonials);


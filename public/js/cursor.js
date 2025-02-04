// document.addEventListener('DOMContentLoaded', () => {
//     const cursor = document.createElement('div');
//     cursor.classList.add('custom-cursor');
//     document.body.appendChild(cursor);

//     let trail = [];
//     let mouseX = 0, mouseY = 0;

//     document.addEventListener('mousemove', (e) => {
//         mouseX = e.clientX;
//         mouseY = e.clientY;

//         // Add new point to trail
//         trail.push({ x: mouseX, y: mouseY });

//         // Keep only last 20 points for smooth motion
//         if (trail.length > 20) {
//             trail.shift();
//         }

//         updateTrail();
//     });

//     function updateTrail() {
//         // Remove old trail elements
//         document.querySelectorAll('.flame-trail').forEach(el => el.remove());

//         // Draw smooth trail using last 20 points
//         for (let i = 0; i < trail.length; i++) {
//             const flame = document.createElement('div');
//             flame.classList.add('flame-trail');
//             document.body.appendChild(flame);

//             const scale = (i / trail.length) * 1.5; // Smaller as it fades
//             flame.style.width = `${15 - i / 1.5}px`;
//             flame.style.height = `${15 - i / 1.5}px`;
//             flame.style.left = `${trail[i].x - 7}px`;
//             flame.style.top = `${trail[i].y - 7}px`;
//             flame.style.opacity = 1 - i / trail.length;
//             flame.style.transform = `scale(${scale})`;

//             // Remove elements after animation
//             setTimeout(() => {
//                 flame.remove();
//             }, 600);
//         }
//     }
// });

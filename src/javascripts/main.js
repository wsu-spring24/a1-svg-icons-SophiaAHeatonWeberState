// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Sophia Heaton"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

// Sophia Heaton
// Assignment 1
// 1/29/2024

import * as d3 from "d3";


window.onload = function() {
    AnimatedButton();
    AnimatedClock();
    AnimatedKnife();
    AnimatedHeart();
    AnimatedEye();
}

function AnimatedButton() {
    // Creating SVG for Button Icon and appending to Canvas
    let ButtonSvg = d3.select('article')
        .append('svg')
        .attr('width', 100)
        .attr('height', 100);

    // Creating background circle
    ButtonSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r',50)
        .attr('fill', 'pink');

    // Creating a ring to give the button depth
    ButtonSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r',40)
        .attr('stroke', 'red')
        .attr('fill', 'transparent');

    // Creating smaller circles is swirl from biggest to smallest
    ButtonSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 30)
        .attr('r',10)
        .attr('fill', 'red');
    ButtonSvg.append('circle')
        .attr('cx', 30)
        .attr('cy', 50)
        .attr('r',10)
        .attr('fill', 'red');
    ButtonSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 70)
        .attr('r',10)
        .attr('fill', 'red');
    ButtonSvg.append('circle')
        .attr('cx', 70)
        .attr('cy', 50)
        .attr('r',10)
        .attr('fill', 'red');

    // Creating spinning and fading in and out animations
    ButtonSvg.append('animateTransform') // Spinning
        .attr('attributeName', 'transform')
        .attr('type', 'rotate')
        .attr('from', '0')
        .attr('to', '360')
        .attr('dur', '2s')
        .attr('repeatCount', 'indefinite');
    ButtonSvg.append('animate') // Fading in and out
        .attr('attributeName', 'opacity')
        .attr('values', '0;1;0')
        .attr('dur', '5s')
        .attr('repeatCount', 'indefinite');
}

function AnimatedClock() {
    // Creating SVG for Clock Icon and appending to Canvas
    let ClockSvg = d3.select('article')
        .append('svg')
        .attr('id', 'icon3')
        .attr('width',100)
        .attr('height', 100);

    // Creating Border for clock face
    ClockSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 45)
        .attr('fill', 'transparent')
        .attr('stroke', 'black');

    // Creating a circle in the middle to look better
    ClockSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r',2)
        .attr('fill', 'black');

    // Creating minute hand
    ClockSvg.append('rect')
        .attr('id', 'ClockMinuteHand') // id needed in order to animate later
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 1)
        .attr('height', 45)
        .attr('fill', 'black');

    // Creating hour hand
    ClockSvg.append('rect')
        .attr('id', 'ClockHourHand') // id needed in order to animate later
        .attr('x', 50)
        .attr('y', 50)
        .attr('width', 1)
        .attr('height', 30)
        .attr('fill', 'black');

    //Creating small circles for hour markers
    ClockSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 10)
        .attr('r',2)
        .attr('fill', 'grey');
    ClockSvg.append('circle')
        .attr('cx', 10)
        .attr('cy', 50)
        .attr('r',2)
        .attr('fill', 'grey');
    ClockSvg.append('circle')
        .attr('cx', 90)
        .attr('cy', 50)
        .attr('r',2)
        .attr('fill', 'grey');
    ClockSvg.append('circle')
        .attr('cx', 50)
        .attr('cy', 90)
        .attr('r',2)
        .attr('fill', 'grey');

    // Creating hour and minute hand movement animations
    d3.select('#ClockMinuteHand')
        .append('animateTransform')
        .attr('attributeName', 'transform')
        .attr('type', 'rotate')
        .attr('from', '0 50 50')
        .attr('to', '360 50 50')
        .attr('dur', '5s')
        .attr('repeatCount', 'indefinite');
    d3.select('#ClockHourHand')
        .append('animateTransform')
        .attr('attributeName', 'transform')
        .attr('type', 'rotate')
        .attr('from', '0 50 50')
        .attr('to', '360 50 50')
        .attr('dur', '8s')
        .attr('repeatCount', 'indefinite');
}

function AnimatedKnife(){
    // Creating SVG for Knife Icon and appending to Canvas
    let KnifeSvg = d3.select('article')
        .append('svg')
        .attr('width', 100)
        .attr('height', 100);

    // Creating knife blade
    KnifeSvg.append('rect') // Knife body
        .attr('x', 45)
        .attr('y', 40)
        .attr('width', 15)
        .attr('height', 45)
        .attr('fill', 'silver');
    KnifeSvg.append('polygon') // Knife Tip
        .attr('points', '45,100 45,84 60,85')
        .attr('fill', 'silver');

    // Creating lighting on blade
    KnifeSvg.append('rect')
        .attr('id', 'Shine1') // id needed in order to animate later
        .attr('x', 0)
        .attr('y', -50)
        .attr('width', 5)
        .attr('height', 100)
        .attr('fill', 'white')
        .attr('transform', 'rotate(45)');
    KnifeSvg.append('rect')
        .attr('id', 'Shine2') // id needed in order to animate later
        .attr('x', 0)
        .attr('y', -50)
        .attr('width', 1)
        .attr('height', 100)
        .attr('fill', 'white')
        .attr('transform', 'rotate(45)');

    // Creating knife handle (Must be above blade and the lighting on blade for animations)
    KnifeSvg.append('rect')
        .attr('x', 30)
        .attr('y', 25)
        .attr('width', 45)
        .attr('height', 15)
        .attr('stroke', 'black') // Stroke defined to see pieces of handle
        .attr('fill', 'grey');
    KnifeSvg.append('rect')
        .attr('x', 45)
        .attr('width', 15)
        .attr('height', 25)
        .attr('stroke', 'black') // Stroke defined to see pieces of handle
        .attr('fill', 'grey');

    // Creating lighting movement on blade animations
    d3.select('#Shine1')
        .append('animate')
        .attr('attributeName', 'x')
        .attr('from', '0')
        .attr('to', '120')
        .attr('dur', '4s')
        .attr('repeatCount', 'indefinite');
    d3.select('#Shine2')
        .append('animate')
        .attr('attributeName', 'x')
        .attr('from', '50')
        .attr('to', '120')
        .attr('dur', '4s')
        .attr('repeatCount', 'indefinite');
}

function AnimatedHeart() {
    // Creating SVG for Heart Icon and appending to Canvas
    let HeartSvg = d3.select('article')
        .append('svg')
        .attr('width',100)
        .attr('height', 100);

    // Creating background
    HeartSvg.append('rect')
        .attr('width', 100)
        .attr('height', 100)
        .attr('stroke', 'red')
        .attr('fill', 'pink')
        .attr('stroke-width', '4');

    // Creating path for heart
    HeartSvg.append('path')
        .attr('fill', 'pink')
        .attr('stroke', 'red')
        .attr('stroke-width', '2')
        .attr('d', 'M20,40 L50,70 L80,40 L80,35 a10,10 30 1,0 -30,0 a10,10 30 1,0 -30,0 Z');

    // Creating Dots that will follow the path of the heart
    HeartSvg.append('circle')
        .attr('id', 'HeartCircle1')
        .attr('r',5)
        .attr('fill', 'red');
    HeartSvg.append('circle')
        .attr('id', 'HeartCircle2')
        .attr('r',5)
        .attr('fill', 'red');

    // Creating dot movements around the heart path
    d3.select('#HeartCircle1')
        .append('animateMotion')
        .attr('dur', '6s')
        .attr('path', 'M20,40 L50,70 L80,40 L80,35 a10,10 30 1,0 -30,0 a10,10 30 1,0 -30,0 Z')
        .attr('repeatCount', 'indefinite');
    d3.select('#HeartCircle2')
        .append('animateMotion')
        .attr('dur', '6s')
        .attr('path', 'M80,40 L50,70 L20,40 L20,35 a10,10 30 0,1 30,0 a10,10 30 0,1 30,0 Z')
        .attr('stroke-dashoffset', '100')
        .attr('repeatCount', 'indefinite');
}

function AnimatedEye() {
    // Creating SVG for Eye Icon and appending to Canvas
    let EyeSvg = d3.select('article')
        .append('svg')
        .attr('width', 100)
        .attr('height', 100);

    // Creating Iris
    EyeSvg.append('circle')
        .attr('id', 'Iris')
        .attr('cx', 45)
        .attr('cy', 45)
        .attr('r', 25)
        .attr('fill', 'blue');

    // Creating Pupil
    EyeSvg.append('circle')
        .attr('id', 'Pupil')
        .attr('cx', 45)
        .attr('cy', 45)
        .attr('r', 10)
        .attr('fill', 'darkblue');

    // Creating Eyelashes/Eye outline
    EyeSvg.append('ellipse')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('rx', 45)
        .attr('ry', 30)
        .attr('fill', 'transparent')
        .attr('stroke', 'black');

    // Creating light reflection in eye
    EyeSvg.append('ellipse')
        .attr('cx', 65)
        .attr('cy', 45)
        .attr('rx', 10)
        .attr('ry', 5)
        .attr('r', 7)
        .attr('fill', 'white');

    // Creating Eyebrow
    EyeSvg.append('rect')
        .attr('width', 100)
        .attr('height', 10)
        .attr('fill', 'black');

    // Creating the movement of pupil and iris animations
    d3.select('#Iris')
        .append('animate')
        .attr('attributeName', 'cx')
        .attr('from', '45')
        .attr('to', '70')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
    d3.select('#Iris')
        .append('animate')
        .attr('attributeName', 'cy')
        .attr('from', '45')
        .attr('to', '50')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
    d3.select('#Pupil')
        .append('animate')
        .attr('attributeName', 'cx')
        .attr('from', '45')
        .attr('to', '70')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
    d3.select('#Pupil')
        .append('animate')
        .attr('attributeName', 'cy')
        .attr('from', '45')
        .attr('to', '50')
        .attr('dur', '4s')
        .attr('repeatCount', '6');
}
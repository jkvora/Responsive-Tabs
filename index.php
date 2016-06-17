<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 <title>Demo App</title>
 <link rel="stylesheet" href="css/style.css">
 <script src="js/jquery-1.11.2.min.js"></script>


</head>

<body class="view">
  <div id="container">
        <ul class="tabs">
            <li><a  id="tab1"class="selected">Slide 1</a></li>
            <li><a id="tab2" >Slide 2</a></li>
            <li><a id="tab3" >Slide 3</a></li>
        </ul>

        <div id="m_list">
          <div class="menu"> </div>
          <select id="m_select">
            <option id="select1" value="select1">Slide 1</option>
            <option id="select2" value="select2">Slide 2</option>
            <option id="select3" value="select3">Slide 3</option>
          </select>
        </div>

        <div id="content_container">
          <h2 id="rtab1" class="responsive_tabs">Slide 1 </h2>
          <div id="view1"><p>Content Slide 1: This is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph but just a series of run on sentences this should help you get faster at typing as im trying not to use too many difficult words in it although i think that i might start making it hard by including some more difficult letters I'm typing pretty quickly so forgive me for any mistakes i think that i will not just tell you a story about the time i went to the zoo and found a monk.</p></div>
          <h2 id="rtab2" class="responsive_tabs">Slide 2</h2>
      <div id="view2"><p>Content Slide 2: I might never be your knight in shining armour
I might never be the one you take home to mother
And I might never be the one who brings you flowers
But I can be the one, be the one tonight

When I first saw you
From across the room </p></div>
          <h2 id="rtab3" class="responsive_tabs">Slide 3</h2>
          <div id="view3"><p>Content Slide 3:  You can dance, you can jive, having the time of your life
See that girl, watch that scene, digging the Dancing Queen

Friday night and the lights are low
Looking out for the place to go
Where they play the right music, getting in the swing
You come in to look for a king.</p></div>
        </div>
</div>




</body>
 <script type="text/javascript" src="js/script.js"></script>
</html>

<template>
    <div class="container-fluid px-5 py-2">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Wordsmith Wonders</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarText">
                <div class="d-flex flex-column">
                    <p v-if="useAuthStore().isLoggedIn">Welcome, {{ useAuthStore().user.username }}!</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNewUser">
                        <font-awesome-icon :icon="['fas', 'right-to-bracket']"/>
                        Log In
                    </button>
                </div>
            </div>
        </nav>
    </div>
    <div class="container">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <span>ESSAY</span>
            <span class="display-6">From Shame To Pride</span>
            <img src="/tumblr_c2f4d36ddb6826a88efbc857cdfe8355_637637ea_1280.jpg" class="img-fluid"
                 width="1080" alt="Responsive image">

            <p>The first time another girl held my hand, I felt this wave of nausea wash over me, like I wanted to throw
                up. It was different from holding hands with my best friends—it was electric, and I knew it in my gut. I
                finally understood what it meant to have butterflies in my stomach, because it felt exactly that way. I
                felt kilig and excitement, but also confusion, guilt, and shame all at the same time.</p>

            <p>I was sixteen then. Being a pastor’s kid, I grew up in the church. During that time I was already part of
                a ministry and was leading worship services. I was also graduating from a science high school, always
                achieving the highest honors throughout my academic career. All my life, I was trying my best to live a
                straight life according to my beliefs.</p>

            <p>From an early age, I believed that homosexuality is a sin, but my feelings left me at a crossroad—like
                one path leads to a life led by God and the other by sin. I felt so ashamed and guilty that I had a
                crush on a girl because I was straying away from God. Disgusted with myself, I vowed never to do it
                again and stay on the right path. I chose my faith.</p>

            <p>Until I met another girl when I was nineteen and I fell in love with her. She was an activist and she
                spoke articulately and compassionately. She inspired me. But then the feelings of disgust, guilt, and
                shame came flooding once again. I was disappointed with myself because I couldn’t keep my promise to the
                Lord. I felt unworthy of serving Him because I was soiled with sin.</p>

            <p>It was the onset of my depression. I stopped attending classes, dragged myself to church, detached myself
                from my childhood friends. I felt worthless. I was punishing myself. I no longer wanted to live.</p>
            <p>My mom noticed the changes in my mood and behavior. She sat me down in a heart-to-heart talk and I came
                out to her. I could see in her eyes that she was heartbroken from what I just told her. I was no longer
                her perfect child. She prayed for me, and in her prayers she asked the Lord to fix me and forgive me.
                She encouraged me to do the same, so that the Lord would help me get through “this phase.” Then she told
                me not to tell my dad about this because we wouldn’t know how he would react.</p>

            <p>I wished to stop existing that day. I wasn’t expecting that she would accept me right then and there, but
                I suppose I had hoped for a better reaction. I never saw her that sad my whole life and it broke me even
                more. I felt so alone.</p>

            <p>The only ray of sunshine for me in what seemed to be months of darkness was whenever I would see the girl
                I had fallen in love with in college. She was what got me through attending classes that semester. I
                even joined her organization in hopes of having more time to spend with her. But to my disappointment, I
                found out that she already had a girlfriend. Of course I was heartbroken. But still, I was able to find
                love. It may not be from her, but I was lucky to have joined an organization where I found a family in
                the university—people who were open and understanding, who listened and empathized with me, who
                supported me in my struggle of finding myself. With them, there was no condemnation or judgment. I felt
                safe and that I no longer needed to lie or hide.</p>

            <p> Because of them, I learned to be critical. I started to challenge the beliefs I held since I was young.
                I read and learned about sexuality, gender identity, and politics. I explored books, films, series,
                internet articles, whatever materials I could gather. I joined educational discussions, mobilizations,
                community integrations, and because of all of that I realized that I wasn’t alone in my struggle, that
                there were many others like me who have been through the same situation, that my struggle with my
                identity was intersectional with the struggles of the marginalized in our society. That gave me a sense
                of belonging and a newfound purpose.</p>

            <p> I shifted to another course. From taking up a pre-med course, I discovered my passion for the arts. If
                there was one thing I have learned from the church that stuck with me, it was being compassionate. I
                learned that I can make a difference in people’s lives through art and other means. I finally thrived in
                college—my grades were good, I joined different organizations, began hosting a local radio program,
                became part of the student council, and eventually even had a girlfriend.</p>

            <p> My friends also urged me to seek professional help for my mental health, and I finally did. Therapy
                taught me how to process my thoughts and emotions and how to understand myself more. I developed a
                greater sense of self-compassion while recovering from the trauma caused by my family, church, and
                internal homophobia.</p>

            <p> It was a long road to finally accept myself for who I am. Breaking away from old ideas was a painful
                process because it was like chipping away parts of my old self to give way for growth. My recovery
                journey was an arduous one, like climbing the mountains with complex terrains, full of ridges and
                valleys and plateaus.</p>

            <p> I can say that I am in a much better place now. I have learned to be kinder and more patient with myself
                and I have a loving partner (and a baby dog!), supportive friends, and a community that embraces me for
                who I am.</p>

            <p> My parents are still conservative and in denial of my identity, but that’s a battle for another day. I
                still go to church, mainly just to appease them and so that people won’t talk behind their backs.
                However, I no longer let it affect me because I am confident and proud of what I have become.</p>

        </div>
        <div class="d-flex flex-column">
            <label class="fw-bold">Add Comment:</label>
            <textarea v-model="comment"></textarea>
            <div v-if="isSubmitted"
                 :class="[ 'alert', 'my-2', { 'alert-success': isSuccess, 'alert-danger': !isSuccess } ]" role="alert">
                {{ message }}
            </div>
            <button @click="submit" class="btn btn-success mt-3">
                Submit
            </button>
        </div>
            <div v-for="comment in comments" :key="comment.id" class="bg-info">
                <div class="d-flex justify-content-between mt-5 p-2">
                    <span>{{ comment.username }}</span>
                    <span>{{ comment.created_dt }}</span>
                </div>
                <div class="p-2">
                    {{ comment.comments }}
                </div>
                <div class="p-2">
                    <button @click="approve(comment.id, 'Y')" class="btn btn-success mt-3">
                        Approve
                    </button>
                    <button @click="approve(comment.id, 'N')" class="btn btn-danger mt-3 mx-4">
                        Deny
                    </button>
                </div>
            </div>

    </div>

</template>
<script setup>

import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";
import {useAuthStore} from "@/stores/auth.js";

const comment = ref('');
const message = ref('');
const isSuccess = ref(false);
const isSubmitted = ref(false);
const isDisplay = ref(false);
let comments = ref([]);
let len = ref(0);

const submit = async () => {
  isSubmitted.value = true;
  await axios.post('/comment', {
    comment: comment.value
  }).then((response) => {
    isSuccess.value = true;
    message.value = response.data.message
  }).catch((error) => {
    isSuccess.value = false;
    message.value = error.data.message
  })
}



const approve = async (id, type) => {
  try {
      await axios.post(`/approve/${id}/${type}`).then((response) => {
          alert(response.data.message);
      })

  } catch (e) {
      console.log()
  }

}

onMounted(async () => {
    await axios.get('/comment').then((response) => {
        console.log(response)
        comments.value = response.data
        len.value = response.data.length
    })
});

</script>
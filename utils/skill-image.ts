import * as adobeXd from "../public/public/svg/skills/adobe-xd.svg";
import adobeaudition from "../public/public/svg/skills/adobeaudition.svg";
import afterEffects from "../public/public/svg/skills/after-effects.svg";
import angular from "../public/public/svg/skills/angular.svg";
import aws from "../public/public/svg/skills/aws.svg";
import azure from "../public/public/svg/skills/azure.svg";
import blender from "../public/public/svg/skills/blender.svg";
import bootstrap from "../public/public/svg/skills/bootstrap.svg";
import bulma from "../public/public/svg/skills/bulma.svg";
import c from "../public/public/svg/skills/c.svg";
import canva from "../public/public/svg/skills/canva.svg";
import capacitorjs from "../public/public/svg/skills/capacitorjs.svg";
import coffeescript from "../public/public/svg/skills/coffeescript.svg";
import cplusplus from "../public/public/svg/skills/cplusplus.svg";
import csharp from "../public/public/svg/skills/csharp.svg";
import css from "../public/public/svg/skills/css.svg";
import dart from "../public/public/svg/skills/dart.svg";
import deno from "../public/public/svg/skills/deno.svg";
import django from "../public/public/svg/skills/django.svg";
import docker from "../public/public/svg/skills/docker.svg";
import fastify from "../public/public/svg/skills/fastify.svg";
import figma from "../public/public/svg/skills/figma.svg";
import firebase from "../public/public/svg/skills/firebase.svg";
import flutter from "../public/public/svg/skills/flutter.svg";
import gcp from "../public/public/svg/skills/gcp.svg";
import gimp from "../public/public/svg/skills/gimp.svg";
import git from "../public/public/svg/skills/git.svg";
import go from "../public/public/svg/skills/go.svg";
import graphql from "../public/public/svg/skills/graphql.svg";
import haxe from "../public/public/svg/skills/haxe.svg";
import html from "../public/public/svg/skills/html.svg";
import illustrator from "../public/public/svg/skills/illustrator.svg";
import ionic from "../public/public/svg/skills/ionic.svg";
import java from "../public/public/svg/skills/java.svg";
import javascript from "../public/public/svg/skills/javascript.svg";
import julia from "../public/public/svg/skills/julia.svg";
import kotlin from "../public/public/svg/skills/kotlin.svg";
import lightroom from "../public/public/svg/skills/lightroom.svg";
import markdown from "../public/public/svg/skills/markdown.svg";
import materialui from "../public/public/svg/skills/materialui.svg";
import matlab from "../public/public/svg/skills/matlab.svg";
import memsql from "../public/public/svg/skills/memsql.svg";
import microsoftoffice from "../public/public/svg/skills/microsoftoffice.svg";
import mongoDB from "../public/public/svg/skills/mongoDB.svg";
import mysql from "../public/public/svg/skills/mysql.svg";
import nextJS from "../public/public/svg/skills/nextJS.svg";
import nginx from "../public/public/svg/skills/nginx.svg";
import numpy from "../public/public/svg/skills/numpy.svg";
import nuxtJS from "../public/public/svg/skills/nuxtJS.svg";
import opencv from "../public/public/svg/skills/opencv.svg";
import photoshop from "../public/public/svg/skills/photoshop.svg";
import php from "../public/public/svg/skills/php.svg";
import picsart from "../public/public/svg/skills/picsart.svg";
import postgresql from "../public/public/svg/skills/postgresql.svg";
import premierepro from "../public/public/svg/skills/premierepro.svg";
import python from "../public/public/svg/skills/python.svg";
import pytorch from "../public/public/svg/skills/pytorch.svg";
import react from "../public/public/svg/skills/react.svg";
import ruby from "../public/public/svg/skills/ruby.svg";
import selenium from "../public/public/svg/skills/selenium.svg";
import sketch from "../public/public/svg/skills/sketch.svg";
import strapi from "../public/public/svg/skills/strapi.svg";
import svelte from "../public/public/svg/skills/svelte.svg";
import swift from "../public/public/svg/skills/swift.svg";
import tailwind from "../public/public/svg/skills/tailwind.svg";
import tensorflow from "../public/public/svg/skills/tensorflow.svg";
import typescript from "../public/public/svg/skills/typescript.svg";
import unity from "../public/public/svg/skills/unity.svg";
import vitejs from "../public/public/svg/skills/vitejs.svg";
import vue from "../public/public/svg/skills/vue.svg";
import vuetifyjs from "../public/public/svg/skills/vuetifyjs.svg";
import webix from "../public/public/svg/skills/webix.svg";
import wolframalpha from "../public/public/svg/skills/wolframalpha.svg";
import wordpress from "../public/public/svg/skills/wordpress.svg";

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};

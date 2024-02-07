import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Tillval } from "@/types/Tillval";
import { Woks } from "@/types/Woks";
import { Currys } from "@/types/Currys";
import { Noodles } from "@/types/Noodles";
import { Image } from "@/types/Image";


export async function getImage(): Promise<Image[]>{
  return createClient(clientConfig).fetch(
    groq`*[_type=="homeImage"] {
      _id,
      _createdAt,
      name,
      "imageUrl": image.asset->url,
      "alt": image.alt
    }`
  )
}

export async function getHours(): Promise<Noodles[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="hours"] {
        _id,
        _createdAt,
        name,
        content,
    }`
  );
}

export async function getWoks(): Promise<Woks[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="woks"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        content,
        order
    }`
  );
}

export async function getCurrys(): Promise<Currys[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="currys"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        price,
        content,
        order
    }`
  );
}

export async function getNoodles(): Promise<Noodles[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="noodles"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        price,
        content,
        order
    }`
  );
}

export async function getTillval(): Promise<Tillval[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="tillval"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        price,
        content,
        order
    }`
  );
}

export async function getNoodlesTillval(): Promise<Tillval[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="noodlesTillval"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        price,
        content,
        order
    }`
  );
}

export async function getPopular(): Promise<Noodles[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="popular"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        price,
        content,
        order
    }`
  );
}

export async function getExtraSides(): Promise<Tillval[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="extraSide"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        price,
        content,
        order
    }`
  );
}

export async function getExtraFood(): Promise<Tillval[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="extraFood"] | order(order asc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        price,
        content,
        order
    }`
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="page"] | order(order asc) {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      order
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
    }`,
    {
      slug,
    }
  );
}

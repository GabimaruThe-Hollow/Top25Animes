function searchAnime() {

    let input = document.getElementById("animeInput").value.toLowerCase().trim();

    let animeList = {

        "attack on titan":
            "FOUND! #1 Attack on Titan | IMDb: 9.1/10 | Author: Hajime Isayama | Year: 2013 | Seasons: 4 | Episodes: 94 | Status: Ended",

        "fullmetal alchemist":
            "FOUND! #2 Fullmetal Alchemist: Brotherhood | IMDb: 9.1/10 | Author: Hiromu Arakawa | Year: 2009 | Seasons: 1 | Episodes: 64 | Status: Ended",

        "fullmetal alchemist brotherhood":
            "FOUND! #2 Fullmetal Alchemist: Brotherhood | IMDb: 9.1/10 | Author: Hiromu Arakawa | Year: 2009 | Seasons: 1 | Episodes: 64 | Status: Ended",

        "steins gate":
            "FOUND! #3 Steins;Gate | IMDb: 8.8/10 | Author: Chiyomaru Shikura | Year: 2011 | Seasons: 1 | Episodes: 24 | Status: Ended",

        "steins;gate":
            "FOUND! #3 Steins;Gate | IMDb: 8.8/10 | Author: Chiyomaru Shikura | Year: 2011 | Seasons: 1 | Episodes: 24 | Status: Ended",

        "one piece":
            "FOUND! #4 One Piece | IMDb: 9.0/10 | Author: Eiichiro Oda | Year: 1999 | Seasons: 21+ | Episodes: 1100+ | Status: Continuing",

        "hunter x hunter":
            "FOUND! #5 Hunter x Hunter | IMDb: 9.0/10 | Author: Yoshihiro Togashi | Year: 2011 | Seasons: 6 | Episodes: 148 | Status: Ended",

        "death note":
            "FOUND! #6 Death Note | IMDb: 8.9/10 | Author: Tsugumi Ohba | Year: 2006 | Seasons: 1 | Episodes: 37 | Status: Ended",

        "neon genesis evangelion":
            "FOUND! #7 Neon Genesis Evangelion | IMDb: 8.5/10 | Author: Hideaki Anno | Year: 1995 | Seasons: 1 | Episodes: 26 | Status: Ended",

        "vinland saga":
            "FOUND! #8 Vinland Saga | IMDb: 8.8/10 | Author: Makoto Yukimura | Year: 2019 | Seasons: 2 | Episodes: 48 | Status: Continuing",

        "code geass":
            "FOUND! #9 Code Geass | IMDb: 8.7/10 | Author: Ichiro Okouchi | Year: 2006 | Seasons: 2 | Episodes: 50 | Status: Ended",

        "monster":
            "FOUND! #10 Monster | IMDb: 8.7/10 | Author: Naoki Urasawa | Year: 2004 | Seasons: 1 | Episodes: 74 | Status: Ended",

        "naruto":
            "FOUND! #11 Naruto: Shippuden | IMDb: 8.7/10 | Author: Masashi Kishimoto | Year: 2007 | Seasons: 21 | Episodes: 500 | Status: Ended",

        "naruto shippuden":
            "FOUND! #11 Naruto: Shippuden | IMDb: 8.7/10 | Author: Masashi Kishimoto | Year: 2007 | Seasons: 21 | Episodes: 500 | Status: Ended",

        "cowboy bebop":
            "FOUND! #12 Cowboy Bebop | IMDb: 8.9/10 | Author: Hajime Yatate | Year: 1998 | Seasons: 1 | Episodes: 26 | Status: Ended",

        "legend of the galactic heroes":
            "FOUND! #13 Legend of the Galactic Heroes | IMDb: 9.0/10 | Author: Yoshiki Tanaka | Year: 1988 | Seasons: 4 | Episodes: 110 | Status: Ended",

        "frieren":
            "FOUND! #14 Frieren: Beyond Journey's End | IMDb: 9.3/10 | Author: Kanehito Yamada | Year: 2023 | Seasons: 1 | Episodes: 28 | Status: Continuing",

        "mob psycho 100":
            "FOUND! #15 Mob Psycho 100 | IMDb: 8.6/10 | Author: ONE | Year: 2016 | Seasons: 3 | Episodes: 37 | Status: Ended",

        "gintama":
            "FOUND! #16 Gintama | IMDb: 8.7/10 | Author: Hideaki Sorachi | Year: 2006 | Seasons: 8 | Episodes: 367 | Status: Ended",

        "bleach":
            "FOUND! #17 Bleach | IMDb: 8.2/10 | Author: Tite Kubo | Year: 2004 | Seasons: 17+ | Episodes: 390+ | Status: Continuing",

        "dragon ball z":
            "FOUND! #18 Dragon Ball Z | IMDb: 8.8/10 | Author: Akira Toriyama | Year: 1989 | Seasons: 9 | Episodes: 291 | Status: Ended",

        "berserk":
            "FOUND! #19 Berserk | IMDb: 8.7/10 | Author: Kentaro Miura | Year: 1997 | Seasons: 1 | Episodes: 25 | Status: Ended",

        "haikyuu":
            "FOUND! #20 Haikyuu!! | IMDb: 8.7/10 | Author: Haruichi Furudate | Year: 2014 | Seasons: 4 | Episodes: 85 | Status: Continuing",

        "haikyuu!!":
            "FOUND! #20 Haikyuu!! | IMDb: 8.7/10 | Author: Haruichi Furudate | Year: 2014 | Seasons: 4 | Episodes: 85 | Status: Continuing",

        "samurai champloo":
            "FOUND! #21 Samurai Champloo | IMDb: 8.6/10 | Author: Shinichiro Watanabe | Year: 2004 | Seasons: 1 | Episodes: 26 | Status: Ended",

        "jojo":
            "FOUND! #22 JoJo's Bizarre Adventure | IMDb: 8.5/10 | Author: Hirohiko Araki | Year: 2012 | Seasons: 6 | Episodes: 190+ | Status: Continuing",

        "jojo's bizarre adventure":
            "FOUND! #22 JoJo's Bizarre Adventure | IMDb: 8.5/10 | Author: Hirohiko Araki | Year: 2012 | Seasons: 6 | Episodes: 190+ | Status: Continuing",

        "made in abyss":
            "FOUND! #23 Made in Abyss | IMDb: 8.3/10 | Author: Akihito Tsukushi | Year: 2017 | Seasons: 2 | Episodes: 25 | Status: Continuing",

        "your lie in april":
            "FOUND! #24 Your Lie in April | IMDb: 8.5/10 | Author: Naoshi Arakawa | Year: 2014 | Seasons: 1 | Episodes: 22 | Status: Ended",

        "demon slayer":
            "FOUND! #25 Demon Slayer: Kimetsu no Yaiba | IMDb: 8.6/10 | Author: Koyoharu Gotouge | Year: 2019 | Seasons: 4 | Episodes: 60+ | Status: Continuing"
    };

    if (animeList[input]) {
        document.getElementById("result").innerHTML = animeList[input];
    }
    else {
        document.getElementById("result").innerHTML =
            "Your interested anime is not on the Top 25 list";
    }
}
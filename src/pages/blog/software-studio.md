---
layout: blog-post
draft: false
date: 2021-09-26T05:38:50.234Z
title: 軟體實驗課程體驗
description: 架完網站沒想過第一篇居然是這個！這是一篇紀錄大二下軟體實驗專案開發的文章，也是本站的第一篇文章。
music:
  lyrics: Little darling. It's been a long, cold, lonely winter.
  song: Here Comes the Sun
  singer: The Beatles
  album: Abbey Road
category: 課程
---

## [前言](#)

這們課是清大資工大二學生的必修。往年通常有兩個老師開這門課，但是也因此專注在不同的主題上。其中一個老師叫如何用 JS 寫出遊戲；而另一位就是我修的（由吳尚鴻老師開設的）：主要教導使用 JS 以及其相關框架架設網站等網路服務。在這次的修課中學到許多非常實用的技巧，還有重要的團隊合作等，非常榮幸能夠遇到我的隊友。

![index.png](/assets/2021-09-26-software-studio/index.png)
*GitoDo 首頁畫面*

## [內文](#)

### [課程介紹](#)

首先從最基礎的 HTML & CSS & Javascript 教起。每週兩堂課，一堂老師講解當週的主題以及相關的技術 & code；另一門則是在電腦教室由助教負責的實驗課，作業內容通常為當週教導的主題。

擁有基本的能力後，進入第二個主題：JS 框架。本堂課採用 Facebook 的 React 框架。從基礎的畫面刻製到後期的與後端 API 串接的部分都有涵蓋到。並在課程的最後，將主題重心移至 AWS 以及 OAuth。

本堂課除了教導技術能力外，學生需要製作期末專題。期末專題分為兩個部分：期中原型（Prototype）以及期末成品展示（Demo）。

1. 期中原型 Prototype
&nbsp;&nbsp;&nbsp;&nbsp;大約在教完基礎 Javascript 時，下一堂課老師會傳授如何想出好的點子以及如何判斷點子是合適且有發展性。接著，確認主題後需要向助教們詢問點子的合適度等。當然也可以不參考助教的意見，只是點子可能就不保證有一定的成效。在之後，會有一整堂課的時間讓每組上台報告，報告時間限定 5 分鐘。報告內容涵蓋產品功能、解決什麼樣的問題、既存的解決方式、訪談成果、Q&A。同學們會依照各組報告票選出最具創新（Highest Novelty）、最佳原型（Best Prototype）、最佳訪談（Deepest Interview）。

2. 期末成品展示 Demo
&nbsp;&nbsp;&nbsp;&nbsp;在大家將成品做出後，每組需上台報告（因疫情關係，改成線上報告）。報告形式不拘，但是大體包括產品展示、技術使用、難題解決、團隊分工、Q&A。老師跟助教一樣會評分。同學們將票選出最具完成性（Most Completeness）、最佳設計（Best Design）、最有潛力（Most Potential）；而組內則是要相互評分。

### [My Part](#)
這邊直接從這個學期的 Project 製作過程開始寫起，其他的 Lab 部分，其實並沒有太多能著墨的部分。Project 能分成下面幾個步驟：1—分組、2—激發點子、3—原型規劃、4-原型刻畫、5—成品製作。

以下依序開始敘寫：

#### [分組](#)
分組通常為 2-4 人，而我原本與其中一個同伴為 2 人，在某次上課後因有認識詢問，便組成了之後的 4 人小組。一開始大家都還有點陌生，在網路上的討論並不能發揮到太大的作用，因此我們花了一點時間認識了彼此。

#### [激發點子](#)
我認為這是整個過程中數一數二艱難的部分。第一，因為好的點子在世上幾乎都有相當良好的解決辦法，一時之間要找到能夠攻破的想法確實有點困難。第二，在老師的課堂中，我們也知道要如何去檢視點子，因此每次想到一個點子的時候不免會因為可行性等問題被否決。

我們一開始的點子是「中文打字練習網站」，發想是因為英文的打字練習網站，如：monkeytype.com，具有相當良好的 UI 設計以及使用者體驗，讓使用者在練習打字的過程中是享受的，在視覺上也能沈浸其中；而對於中文打字網站而言，不論是 UI 或是使用者體驗都相當的糟糕，充其量只是帶有計時器以及錯字辨認的文書編輯軟體。為此我們第一個點子是製作一個中文打字網站，甚至在向助教詢問可行性前，基礎的畫面設計都已經起步了。

然而，在向助教詢問意見後，我們得到相當淒慘的回應。助教說：打字練習不是多打就好了嗎？這種東西會有人想要特別練習嗎？一開始我們還不死心，但是經過多個助教的回饋後，我們確知這個點子並非是一個好點子。當時認知的缺點為：受眾雖非常清楚但是無法做出與英文打字網站區隔，充其量只是將該網站移植成中文版而已，並不具有非常好的創意。

因此在下一堂課的下課前半小時，我邊上課邊想著點子。腦中突然想著要是有個能安排各個科目的所有作業課程考試的提醒事項軟體就好了，就像 Git 那樣能夠已點的方式呈現，並用類似 Repo 的概念去管理每一個科目。因此我們在討論過後並詢問助教的想法後，得到一個還不錯的回應，讓我們確認了 Project 的方向。

接下來，團隊目標便邁向了下一步：原型製作。

#### [原型規劃](#)
確認點子後，我們在圖書館經歷過 2-3 次的大腦風暴（Brainstorming），開始建立產品的原型。因為是我發想的點子，因此我的想法也比較多。

第一次的會議中，我們大致討論了整個產品的功能以及方向。我首先將心中所有的想法畫出來，並透過隊友的討論中，找出每個想法的盲點以及修改的地方。並同時將 UI 畫在白板上。（白板作為討論的工具非常實用，從點子的列點至 UI 的設計都能快速的呈現）

第二次的會議中，我們完成另一個重要功能的架構。因為當初的發想是從 Git 的概念改變而成，因此我們想為何不要讓他一樣能夠有分享的功能，並像 Git 一樣，能夠 Fork 或是共同參與的功能呢？因此我們的線（Repo、Line、Branch）多了複製（Copy）以及分享（Share）的功能。 

在軟體的命名和細部功能稱呼也讓我們頭疼了許久。首先是軟體的命名，我們的軟體最後命名為 GitoDo。然而它也經過相當多的變革，曾經交過 DotoLine，到後來的 GitoDo 是因為我們的主要想法是 Git 的概念，而軟體的整體功能更像一個提醒事項（Todo List），因此便想出了這個名字.[^1]

[^1]: 然而至學期末在 Google 上搜尋這個名字後，卻發現有不少相同名字的作品。雖然本質上是完全不一樣的東西，而且我們這個僅僅是一個學期的專案，但是下次在取名時還是應該要避免這個問題，不論產品的名稱有多好聽、多有概念。

在細部功能的命名中，對應到 Git 的概念有許多：Repo, Branch, Commit, Fork... 等。下列就依序述說一下當初的困擾：
- Repo ->  Branch
&nbsp;&nbsp;&nbsp;&nbsp;在 Git 上 Repo（倉庫）就是一個儲存同一專案的地方；而在此我們借用此概念，在生活上或是課業上的所有待做事項使用 **Branch** 的概念，將同一主題利用 **Branch** 的想法對應。

- Branch -> Branch From
&nbsp;&nbsp;&nbsp;&nbsp;而 Git 上有支援多分支的功能；在生活上我們在總是會遇到這個主題中，會延伸出其他小主題等，因此藉由 **Branch From** 的概念，將延伸的想法對應上。

- Commit -> Task
&nbsp;&nbsp;&nbsp;&nbsp;在 Git 上 Commit 就是完成一個狀態的概念，因此我們將他在 GitoDo 上使用 **Task** 作為代表，代表一般的提醒事項。

- Fork -> Copy
&nbsp;&nbsp;&nbsp;&nbsp;在 Git 上 Fork 代表將 1 個 Repo 複製到自己的資料庫中，並可以做任何修改。因此在此，我們使用 **Copy** 代稱，讓使用者能夠搜尋既存的 **Branch** 並且複製到自己的資料庫中。此外，使用者能夠在該條 **Branch** 上做任意修改且不會對原本的 **Branch** 造成任何變動。

- Pull Request -> Share
&nbsp;&nbsp;&nbsp;&nbsp;在 Git 上我們能透過 Pull Request 的功能將多人的貢獻全部 Commit 到同一個 **Branch** 中。在現實的生活中，我們可能會有多人同時修一門課、擁有同一個考試的目標等，因此我們利用 **Share** 的功能讓多個使用者能夠在同一條 **Branch** 上一起完成同樣的 **Task**，並且可以即時知道其他人的進度。

![prototype.png](/assets/2021-09-26-software-studio/prototype.png)
*Prototype 功能*

以上的功能詳述是在經過我們團隊中多次修改以及討論後的結果，中間使用過 Dot, Line, Branch, Copy...等。曾經讓整個功能變得相當複雜的感覺，但是我想這可能是因為我們初期開發的時候沒有規劃好、經驗也不夠多的關係。在經歷多次 revise 後，我們終於修改出上述的版本。

#### [原型刻畫](#)
接下來就是所謂的刻 Prototype。我們選擇的是 Adobe 的 XD。綜觀下來，其實有蠻多組別選擇使用 Figma（另外一種畫 Prototype 的工具，主要是在其 Web 版）。

在這個部分，團隊主要是由我負責這個部分，因此我對這部分也能詳細講述整個過程。在刻劃的過程中，首先當然是熟悉介面，我想這部分就容我忽略，網路上應該有蠻多大神分享過了。

接著就是產品的原型，我們在的第一版原型是在圖書館的白板上建立的。在拉 Prototype 的過程中，在 XD 上，最重要的第一步就是找出每個畫面需要的 Component（物件）。透過 XD 中的物件功能，能夠快速修改整個介面。而在整個製作過程中，顏色的確定也是畫面調配重要的部分。

接著就是人機介面以及互動的部分。因為之前也沒有什麼設計的經驗因此我都是憑著平常使用各種介面的心得下去設計的。然後其實後來成品的畫面跟原型的畫面其實差別蠻大的，從方形的主題到圓角矩形的主題，以及線條的呈現等，但是在按鈕或是介面互動的設計部分其實並沒有更改太多。

![prototype2.png](/assets/2021-09-26-software-studio/prototype2.png)
*Prototype 頁面*

#### [成品製作](#)
期中 Demo 後，就直接進入成品製作的階段，當時其實剛學習完 React 如何使用等，很多都是在 Project 中看需要什麼功能直接詢問 Google 在網路上得到如何去撰寫想要的功能。算是一個能在短期內激勵自己能力非常好的辦法。

而我們將 4 人分成 4 個部分分頭進行：（1）後端、資料庫和 API （2）前端網頁架構（3）線條的呈現（4）個人設定頁面。也因為我們有這樣分工，才能在時間內趕上 Deadline，否則我們是絕對做不完的。

我是負責**前端網頁架構**的部分，主要負責將刻畫出來的原型寫成程式碼並渲染出來。我們團隊決定使用 Next.js（一個 SSR 的 React 框架）以及 TailwindCSS 作為前端的框架。然而這兩個其實在那個時候我也都還不會，CSS 對我來說我也只是會基礎的而已。但是挑戰來了，就只能接下了吧！

首先當然是複製出 Prototype 中的畫面，因為使用 Tailwind 的關係，我其實能快速的渲染出想要的成果，結果在第一版的刻畫中，我就將主題更改稱**圓角矩形**。在刻畫 UI 的過程，我很享受，因為我能向大家分享我的美感，而當團隊中的同伴到身邊詢問的人都認為是不錯的設計時，這樣的成就感真的是爆棚！到了後期開始接上 API 後，其實面臨的是 Javascript 的挑戰。遇到相當多 HTTPS、CURD 的問題。一切都是因為有後端同學的協助才得以過關。

![rectangle.png](/assets/2021-09-26-software-studio/rectangle.png)
*圓角矩形的成品*

其實這部分也有很多經驗可以分享，但是都是小小的故事集中起來，在這一段開發的過程中，其實我是享受的。一邊準備著來臨的期末考，一邊打著 Code，雖然每天都熬夜到 3-4 點，但是看到有很優秀的成果其實一切的努力都值得了。

### [成果發表](#)
其實做完整個成品這個課程還沒結束，還有成果發表等著我們。但是可惜遇到 Covid-19 的疫情爆發，我們僅能在網路上發表。因此我們決定用影片去簡介我們的產品，在編排影片的過程，其實也相當刺激，要在一定的時限內講完，而且我為了模仿一般發表會通常會出現的電腦和手機的比對圖還為此做了好幾張 Mock-up 的圖，也是一個很難能可貴的經驗。成果發表當天，在網上雖然看不到大家的臉想對比較不會緊張，但是我其實內心想要享受大家當場的掌聲，只能說這是個遺憾吧！

![mockup.png](/assets/2021-09-26-software-studio/mockup.png)
*手機和電腦的產品對照圖*

## [後記](#)
這篇只是小記一下 109 學年度的下學期，曾經花費一段時間做出一個漂亮的專案，雖然沒有將所有過程都記載在本文中，但是那段時間一定會在我的腦中留下深刻的印象。最後還是要再次感謝這次遇到的隊友，雖然我們合作的時間只有不到 3 個月，但是我們是一個相當厲害的團隊！

## [作品連結](#)
[Github-Frontend](https://github.com/Ice1187/GitoDo)&nbsp;&nbsp;•&nbsp;&nbsp;[Github-Backend](https://github.com/Com1t/koa-api-example)&nbsp;&nbsp;•&nbsp;&nbsp;[Demo Video (中文)](https://www.youtube.com/watch?v=PavkGlCeCkg)
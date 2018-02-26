(ns reagentapp.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

(def c
  (reagent/atom 1))


;; -------------------------
;; Views

(defn home-page []
  [:div [:h1 "I Feel Good!!!"]
    [:div
     [:h2 [:a {:href "/merica"} "Livin in America"]]
     [:h2 [:a {:href "/mike-page"} "Mike Page"]]
     [:div
       [:form]]
     [:label
      [:input
       {:name "message"
        :type "text"
        :default-value "Papas Got a Brand New Bag"}]]
     [:input {:type "JAM"}]]
    [:img
      {:src "http://hw-static.worldstarhiphop.com/u/pic/2014/10/vKuedu6F8rty.jpg"}]
   [:div
    [:h2 [:a {:href "/fun"} "The Fun Page"]]]])



(defn merica-page []
  [:div [:h2 "Merica"]
   [:h3 [:a {:href "/"} "Back Up Off That Thing!"]]
   [:img
    {:src "https://i.pinimg.com/736x/e2/dd/4c/e2dd4ca1be24e521702059fe167eebfa.jpg"}]])


(defn mike-page []
  [:h2 [:a {:href "/mike-page"} "Mike Page"]]
  [:img
   {:src "https://cdn.vox-cdn.com/thumbor/irdJTo5qPi3_CO5eC0Dvp8cq8iE=/0x0:640x480/1200x800/filters:focal(0x0:640x480):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/49524447/sparkle-unicorn-bigger.0.gif"}])


(defn fun-page []
  [:div [:h2 "Fun Page"]])



;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div [@page]])

(secretary/defroute "/" []
  (reset! page #'home-page))

(secretary/defroute "/merica" []
  (reset! page #'merica-page))

(secretary/defroute "/mike-page" []
  (reset! page #'mike-page))

(secretary/defroute "/fun" []
  (reset! page #'fun-page))


;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))

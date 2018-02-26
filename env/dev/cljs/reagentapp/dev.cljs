(ns ^:figwheel-no-load reagentapp.dev
  (:require
    [reagentapp.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)

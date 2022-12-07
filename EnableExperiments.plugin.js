/**
 * @name Enable Experiments
 * @version 0.0.1
 * @description Enables the "Experiments" section, along with some other "staff only" features in Discord.
 * @author Skribb11es
 * @website https://github.com/Skribb11es/
 * @source https://github.com/Skribb11es/BD-Enable-Discord-Experiments/EnableExperiments.plugin.js
 */

 module.exports = class run{
    load() { }
    start() {

  let wpRequire;
  window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
  let mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.Z?.isDeveloper !== "undefined");
  let usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
  let nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes)
  try {
      nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user: {flags: 1}})
  } catch (e) {}
  let oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
  usermod.exports.default.__proto__.getCurrentUser = () => ({hasFlag: () => true})
  nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
  usermod.exports.default.__proto__.getCurrentUser = oldGetUser
}
stop(){

}
}

## 小结

这节我们用 uv 动画实现了无限隧道的效果。

首先画了一个圆柱体，内部空心，设置反面的透明度贴图 alphaMap。

透明度贴图是用贴图的颜色来设置透明度的，需要同时设置材质的 transparent 为 true。

通过改变 texture.offset.y 来实现 uv 动画，用 clock.getDelata 来计算每次 offset.y 改变的数值。

然后通过 hsl 标识颜色，并且改变色相 h 的方式来实现了颜色的改变。

这算是一个比较综合的小实战，用到了 alphaMap + HSL + uv 动画。

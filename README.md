# 퍼포먼스 최적화

1. 로딩 성능 최적화
2. 렌더링 최적화
3. 이미지 프리로드
4. 컴포넌트 프리로드
5. 컴포넌트 레이지 로딩

## webpack-bundle-analyzer

웹팩 번들 파일의 구조를 분석한다.

```planetext
npx cra-bundle-analyzer
```

## 이미지

너비에 두배 정도되는 이미지를 사용하는게 좋다.
120x 120에서는 240x240의 이미지를사용하는게 좋다.  
외부에서 이미지를 받아오는 경우에는 어떻게 이미지 최적화를 할 수 있나?  
CDN(contents Delivery network)을 사용한다.  
Image CDN(image processing CDN)

`http://cdn.image.com?src=[img src]&width=200&height=100`

a_kw=imgix&hsa_cam=9210499657&gclid=Cj0KCQiAvP6ABhCjARIsAH37rbTScnL4y1YSBZ2aBPICgve_0zcQbG9mk-d6YYY3nOUtX80zqbhpKYoaAjl8EALw_wcB)

## 텍스트 압축

2kb이상이면 인코딩을 하는게 낫다.  
그 이하는 압축을 하지 않는 것이 낫다.

### 1. Gzip

### 2. Deflate

## 렌더링 최적화

- 프레임 드랍에 의한 쟁크 현상을 피해야한다.
- 리플로우 리페인트를 최소화한다.
- 리플로우 리페인트가 생기는 css 속성 변화를 최소화한다.
- critical rendering path, Pixel Pipline

### 랜더링 과정

layout 과정과, paint과정을 최소화해야한다.

1. dom + cssom
2. render tree
3. layout
4. paint
5. composite

width, heigt는 전 과정을 밟는다.
color는 layout과정이 생략된다.

### reflow와 repaint를 모두 피하는 방법

gpu가 관여하는 속성( trasform, opacity)을 이용한다.  
layout과 paint가 생략된다.(reflow, repaint)

### Reflow발생

위치와 크기가 변경된다.

- position
- width
- height
- left
- bottom
- margin
- padding
- border
- border-width
- diplay
- float
- font-family
- font-size
- font-weight
- line-height
- overflow
- text-align
- vertical-align

### repaint 발생

위치는 바꾸지 않고 크기만 바꾼다.

- background-color
- background-image
- background-position
- background-repeat
- background-size
- border
- box-shadow
- color
- line-style
- online
- text-decoration

### 둘 다 하지 생략

#### transform

- scale
- scaleX
- translate
- rotate

#### opacity

## ref

- [repository](https://github.com/performance-lecture/lecture-1)
- [imgix](https://www.imgix.com/?utm_term=imgix&utm_campaign=adwords-branded&utm_source=adwords&utm_medium=ppc&hsa_tgt=kwd-347244981599&hsa_grp=98890898611&hsa_src=g&hsa_net=adwords&hsa_mt=p&hsa_ver=3&hsa_ad=456649958299&hsa_acc=8534109361&hs
- [transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
